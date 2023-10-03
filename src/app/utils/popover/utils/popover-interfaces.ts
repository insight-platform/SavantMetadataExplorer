import { EventEmitter, NgZone, TemplateRef } from '@angular/core';
import {
  MiPopoverPositionX,
  MiPopoverPositionY,
  MiPopoverTriggerEvent,
  MiPopoverScrollStrategy,
} from './popover-types';

export interface IMiPopoverPanel {
  triggerEvent: MiPopoverTriggerEvent;
  xPosition: MiPopoverPositionX;
  yPosition: MiPopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  scrollStrategy: MiPopoverScrollStrategy;
  containerPositioning: boolean;
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  zone: NgZone;
  closed: EventEmitter<void>;
  setCurrentStyles: () => void;
  setPositionClasses: (x: MiPopoverPositionX, y: MiPopoverPositionY) => void;
  emitCloseEvent: () => void;
}
