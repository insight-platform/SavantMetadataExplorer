import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewContainerRef,
  HostListener,
  HostBinding,
  ChangeDetectorRef, OnChanges,
} from '@angular/core';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  HorizontalConnectionPos,
  VerticalConnectionPos,
  FlexibleConnectedPositionStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMiPopoverPanel } from './popover-interfaces';
import {
  MiPopoverPositionX,
  MiPopoverPositionY,
  MiPopoverTriggerEvent,
  MiPopoverScrollStrategy,
} from './popover-types';
import { throwMiPopoverMissingError } from './popover-errors';

/**
 * This directive is intended to be used in conjunction with an mi-popover tag. It is
 * responsible for toggling the display of the provided popover instance.
 */
@Directive({
  selector: '[miPopoverTrigger]',
  exportAs: 'miPopoverTrigger',
})
export class MiPopoverTriggerDirective implements AfterViewInit, OnChanges, OnDestroy {
  /** References the popover instance that the trigger is associated with. */
  @Input('miPopoverTrigger') popover: IMiPopoverPanel;
  @Input() popoverPosition: MiPopoverPositionY;
  @Input() fixedPopoverPosition: [number, number];
  @Input() arrowPosition: MiPopoverPositionX;
  /** Popover trigger event */
  @Input() triggerEvent: MiPopoverTriggerEvent;
  /** Event emitted when the associated popover is opened. */
  @Output() popoverOpened = new EventEmitter<void>();
  /** Event emitted when the associated popover is closed. */
  @Output() popoverClosed = new EventEmitter<void>();
  @HostBinding('attr.aria-haspopup') ariaHaspopup = true;
  popoverOpened$ = new Subject<void>();
  popoverClosed$ = new Subject<void>();

  private _portal: TemplatePortal<any>;
  private _overlayRef: OverlayRef | null = null;
  private _popoverOpen = false;
  private _halt = false;
  private _backdropSubscription: Subscription;
  private _positionSubscription: Subscription;
  private _detachmentsSubscription: Subscription;

  private _mouseoverTimer: any;
  private _openedByMouse = false;
  private _onDestroy = new Subject<void>();

  /** Whether the popover is open. */
  get popoverOpen(): boolean {
    return this._popoverOpen;
  }
  constructor(
    private _overlay: Overlay,
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    @Optional() private _dir: Directionality,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this._checkPopover();
    this._setCurrentConfig();
    this.popover.closed.subscribe(() => this.closePopover());
  }

  ngOnChanges() {
    if (!this.fixedPopoverPosition || !this.fixedPopoverPosition[0]) {
      this.closePopover();
    } else {
      this.openPopover();
    }
  }

  ngOnDestroy() {
    this.destroyPopover();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('click', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick(_: MouseEvent): void {
    if (this.popover.triggerEvent === 'click') {
      this.togglePopover();
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('mouseenter', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onMouseEnter(_: MouseEvent): void {
    this._halt = false;
    if (this.popover.triggerEvent === 'hover') {
      this._mouseoverTimer = setTimeout(() => {
        this.openPopover();
      }, this.popover.enterDelay);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('mouseleave', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onMouseLeave(_: MouseEvent): void {
    if (this.popover.triggerEvent === 'hover') {
      if (this._mouseoverTimer) {
        clearTimeout(this._mouseoverTimer);
        this._mouseoverTimer = null;
      }
      if (this._popoverOpen) {
        setTimeout(() => {
          if (!this.popover.closeDisabled) {
            this.closePopover();
          }
        }, this.popover.leaveDelay);
      } else {
        this._halt = true;
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('mousedown', ['$event'])
  handleMousedown(event: MouseEvent): void {
    if (event && !isFakeMousedownFromScreenReader(event)) {
      this._openedByMouse = true;
    }
  }

  togglePopover(): void {
    return this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  openPopover(): void {
    if (!this._popoverOpen && !this._halt) {
      this._createOverlay().attach(this._portal);

      this._subscribeToBackdrop();
      this._subscribeToDetachments();

      this._initPopover();
    }
  }

  closePopover(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._resetPopover();
    }

    this.destroyPopover();
  }

  destroyPopover(): void {
    if (this._mouseoverTimer) {
      clearTimeout(this._mouseoverTimer);
      this._mouseoverTimer = null;
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
      this._cleanUpSubscriptions();
    }

    this._onDestroy.next();
    this._onDestroy.complete();
  }

  focus() {
    this._elementRef.nativeElement.focus();
  }

  get dir(): Direction {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  private _setCurrentConfig() {
    if (this.triggerEvent) {
      this.popover.triggerEvent = this.triggerEvent;
      this.popover.yPosition = this.popoverPosition;
      this.popover.xPosition = this.arrowPosition;
    }

    this.popover.setCurrentStyles();
  }

  private _subscribeToBackdrop(): void {
    if (this._overlayRef) {
      if (this.triggerEvent === 'click' && this.popover.closeOnBackdropClick === true) {
        this._overlayRef
          .backdropClick()
          .pipe(takeUntil(this.popoverClosed$), takeUntil(this._onDestroy))
          .subscribe(() => {
            this.popover.emitCloseEvent();
          });
      }
    }
  }

  private _subscribeToDetachments(): void {
    if (this._overlayRef) {
      this._overlayRef
        .detachments()
        .pipe(takeUntil(this.popoverClosed$), takeUntil(this._onDestroy))
        .subscribe(() => {
          this._setPopoverClosed();
        });
    }
  }

  private _initPopover(): void {
    this._setPopoverOpened();
  }

  private _resetPopover(): void {
    this._setPopoverClosed();
    if (!this._openedByMouse) {
      this.focus();
    }
    this._openedByMouse = false;
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverOpened(): void {
    if (!this._popoverOpen) {
      this._popoverOpen = true;

      this.popoverOpened$.next();
      this.popoverOpened.emit();
    }
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverClosed(): void {
    if (this._popoverOpen) {
      this._popoverOpen = false;

      this.popoverClosed$.next();
      this.popoverClosed.emit();
    }
  }

  private _checkPopover() {
    if (!this.popover) {
      throwMiPopoverMissingError();
    }
  }

  private _createOverlay(): OverlayRef {
    if (!this._overlayRef) {
      this._portal = new TemplatePortal(this.popover.templateRef, this._viewContainerRef);
      const config = this._getOverlayConfig();
      this._subscribeToPositions(config.positionStrategy as FlexibleConnectedPositionStrategy);
      this._overlayRef = this._overlay.create(config);
    }

    return this._overlayRef;
  }

  private _getOverlayConfig(): OverlayConfig {
    const overlayState = new OverlayConfig();
    overlayState.positionStrategy = this._getPosition();

    /** Display overlay backdrop if trigger event is click */
    if (this.triggerEvent === 'click') {
      overlayState.hasBackdrop = true;
      overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
    }

    overlayState.direction = this.dir;
    overlayState.scrollStrategy = this._getOverlayScrollStrategy(this.popover.scrollStrategy);

    return overlayState;
  }

  private _getOverlayScrollStrategy(strategy: MiPopoverScrollStrategy): ScrollStrategy {
    switch (strategy) {
      case 'noop':
        return this._overlay.scrollStrategies.noop();
      case 'close':
        return this._overlay.scrollStrategies.close();
      case 'block':
        return this._overlay.scrollStrategies.block();
      case 'reposition':
      default:
        return this._overlay.scrollStrategies.reposition();
    }
  }

  private _subscribeToPositions(position: FlexibleConnectedPositionStrategy): void {
    this._positionSubscription = position.positionChanges.subscribe(change => {
      const positionX: MiPopoverPositionX =
        change.connectionPair.overlayX === 'start'
          ? 'after'
          : change.connectionPair.overlayX === 'end'
          ? 'before'
          : 'center';
      const positionY: MiPopoverPositionY =
        change.connectionPair.overlayY === 'top' ? 'below' : 'above';

      // required for ChangeDetectionStrategy.OnPush
      this._changeDetectorRef.markForCheck();

      this.popover.zone.run(() => {
        this.popover.xPosition = positionX;
        this.popover.yPosition = positionY;
        this.popover.setCurrentStyles();

        this.popover.setPositionClasses(positionX, positionY);
      });
    });
  }

  private _getPosition(): FlexibleConnectedPositionStrategy {
    const [originX, origin2ndX, origin3rdX]: HorizontalConnectionPos[] =
      this.popover.xPosition === 'before' ?
        ['end', 'start', 'center'] :
        this.popover.xPosition === 'after' ?
          ['start', 'end', 'center'] :
          ['center', 'start', 'end'];

    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
      this.popover.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
    const originY = overlayFallbackY;
    const originFallbackY = overlayY;
    const overlayX = originX;

    const offsetX = this.fixedPopoverPosition && this.fixedPopoverPosition[0] ? this.fixedPopoverPosition[0] :
      this.popover.xOffset && !isNaN(Number(this.popover.xOffset))
        ? Number(this.popover.xOffset)
        : 0;
    const offsetY = this.fixedPopoverPosition && this.fixedPopoverPosition[1] ? this.fixedPopoverPosition[1] :
      this.popover.yOffset && !isNaN(Number(this.popover.yOffset))
        ? Number(this.popover.yOffset)
        : 0;

    return this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withLockedPosition(true)
      .withPositions([
        {
          originX,
          originY,
          overlayX,
          overlayY,
          offsetY,
        },
        {
          originX: origin2ndX,
          originY,
          overlayX: origin2ndX,
          overlayY,
          offsetY,
        },
        {
          originX,
          originY: originFallbackY,
          overlayX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
        {
          originX: origin2ndX,
          originY: originFallbackY,
          overlayX: origin2ndX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
        {
          originX: origin3rdX,
          originY,
          overlayX: origin3rdX,
          overlayY,
          offsetY,
        },
        {
          originX: origin3rdX,
          originY: originFallbackY,
          overlayX: origin3rdX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
      ])
      .withDefaultOffsetX(offsetX)
      .withDefaultOffsetY(offsetY);
  }

  private _cleanUpSubscriptions(): void {
    if (this._backdropSubscription) {
      this._backdropSubscription.unsubscribe();
    }
    if (this._positionSubscription) {
      this._positionSubscription.unsubscribe();
    }
    if (this._detachmentsSubscription) {
      this._detachmentsSubscription.unsubscribe();
    }
  }
}
