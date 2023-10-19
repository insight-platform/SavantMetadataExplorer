import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  NgZone,
  Optional, booleanAttribute,
} from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';

import {
  PopoverPositionX,
  PopoverPositionY,
  PopoverTriggerEvent,
  PopoverScrollStrategy,
} from './popover-types';
import { throwPopoverInvalidPositionX, throwPopoverInvalidPositionY } from './popover-errors';
import { IPopoverPanel } from './popover-interfaces';
import { transformPopover } from './popover-animations';

@Component({
  selector: 'sf-popover',
  templateUrl: './popover.html',
  styleUrls: ['./popover.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [transformPopover],
  exportAs: 'sf-popover',
})
export class PopoverComponent implements IPopoverPanel, OnDestroy {
  /** Popover close on container click */
  @Input({ transform: booleanAttribute }) closeOnPanelClick = false;
  /** Popover close on backdrop click */
  @Input({ transform: booleanAttribute }) closeOnBackdropClick = true;
  /** Popover focus trap using cdkTrapFocus */
  @Input({ transform: booleanAttribute }) focusTrapEnabled = true;
  /** Popover focus trap auto capture using cdkTrapFocusAutoCapture */
  @Input({ transform: booleanAttribute }) focusTrapAutoCaptureEnabled = true;
  @Input() disableCloseOnMouseLeave = false;
  @Output() closed = new EventEmitter<void>();
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @HostBinding('attr.role') role = 'dialog';
  public classList = '';
  public containerPositioning = false;
  /** Closing disabled on popover */
  public closeDisabled = false;
  /** Config object to be passed into the popover's arrow ngStyle */
  public popoverPanelStyles: any;
  /** Config object to be passed into the popover's arrow ngStyle */
  public popoverArrowStyles: any;

  /** Settings for popover, view setters and getters for more detail */
  private _xPosition: PopoverPositionX = 'after';
  private _yPosition: PopoverPositionY = 'below';
  private _triggerEvent: PopoverTriggerEvent = 'hover';
  private _scrollStrategy: PopoverScrollStrategy = 'reposition';
  private _enterDelay = 100;
  private _leaveDelay = 100;
  private _panelOffsetX = 0;
  private _panelOffsetY = 0;
  private _arrowOffsetX = 20;
  private _arrowWidth = 16;

  /** Position of the popover in the X axis. */
  @Input()
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value: PopoverPositionX) {
    if (value !== 'before' && value !== 'after' && value !== 'center') {
      throwPopoverInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }

  /** Position of the popover in the Y axis. */
  @Input()
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value: PopoverPositionY) {
    if (value !== 'above' && value !== 'below') {
      throwPopoverInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }

  /** Popover trigger event */
  @Input()
  get triggerEvent(): PopoverTriggerEvent {
    return this._triggerEvent;
  }
  set triggerEvent(value: PopoverTriggerEvent) {
    this._triggerEvent = value;
  }

  /** Popover scroll strategy */
  @Input()
  get scrollStrategy(): PopoverScrollStrategy {
    return this._scrollStrategy;
  }
  set scrollStrategy(value: PopoverScrollStrategy) {
    this._scrollStrategy = value;
  }

  /** Popover enter delay */
  @Input()
  get enterDelay(): number {
    return this._enterDelay;
  }
  set enterDelay(value: number) {
    this._enterDelay = value;
  }

  /** Popover leave delay */
  @Input()
  get leaveDelay(): number {
    return this._leaveDelay;
  }
  set leaveDelay(value: number) {
    this._leaveDelay = value;
  }

  /** Popover target offset x */
  @Input()
  get xOffset(): number {
    return this._panelOffsetX;
  }
  set xOffset(value: number) {
    this._panelOffsetX = value;
  }

  /** Popover target offset y */
  @Input()
  get yOffset(): number {
    return this._panelOffsetY;
  }
  set yOffset(value: number) {
    this._panelOffsetY = value;
  }

  /** Popover arrow offset x */
  @Input()
  get arrowOffsetX(): number {
    return this._arrowOffsetX;
  }
  set arrowOffsetX(value: number) {
    this._arrowOffsetX = value;
  }

  /** Popover arrow width */
  @Input()
  get arrowWidth(): number {
    return this._arrowWidth;
  }
  set arrowWidth(value: number) {
    this._arrowWidth = value;
  }

  constructor(
    @Optional() private _dir: Directionality,
    private _elementRef: ElementRef,
    public zone: NgZone
  ) {
    this.setPositionClasses();
  }

  ngOnDestroy() {
    this.emitCloseEvent();
    this.closed.complete();
  }

  handleKeydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case ESCAPE:
        this.emitCloseEvent();
        return;
    }
  }

  emitCloseEvent(): void {
    this.closed.emit();
  }

  /** Close popover on click if closeOnPanelClick is true */
  onClick() {
    if (this.closeOnPanelClick) {
      this.emitCloseEvent();
    }
  }

  /** Disables close of popover when leaving trigger element and mouse over the popover */
  onMouseOver() {
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = true;
    }
  }
  /** Enables close of popover when mouse leaving popover element */
  onMouseLeave() {
    if (this.disableCloseOnMouseLeave) {
      return;
    }
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = false;
      this.emitCloseEvent();
    }
  }

  /** Sets the current styles for the popover to allow for dynamically changing settings */
  setCurrentStyles() {
    const left =
      this.xPosition === 'after' ?
        `${this.arrowOffsetX - this.arrowWidth / 2}px` :
        this.xPosition === 'center' ?
          `calc(50% - ${this.arrowWidth / 2}px)` :
          '';
    const right = this.xPosition === 'before' ? `${this.arrowOffsetX - this.arrowWidth / 2}px` : '';

    this.popoverArrowStyles = {
      left: this._dir.value === 'ltr' ? left : right,
      right: this._dir.value === 'ltr' ? right : left,
    };
  }

  setPositionClasses(posX = this.xPosition, posY = this.yPosition): void {
    this.classList = ['popover-' + posX, 'popover-' + posY].join(' ');
  }
}
