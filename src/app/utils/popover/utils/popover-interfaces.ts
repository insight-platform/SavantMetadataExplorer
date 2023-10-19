import { EventEmitter, NgZone, TemplateRef } from '@angular/core';
import {
  PopoverPositionX,
  PopoverPositionY,
  PopoverTriggerEvent,
  PopoverScrollStrategy,
} from './popover-types';

export interface IPopoverPanel {
  triggerEvent: PopoverTriggerEvent;
  xPosition: PopoverPositionX;
  yPosition: PopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  scrollStrategy: PopoverScrollStrategy;
  containerPositioning: boolean;
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  zone: NgZone;
  closed: EventEmitter<void>;
  setCurrentStyles: () => void;
  setPositionClasses: (x: PopoverPositionX, y: PopoverPositionY) => void;
  emitCloseEvent: () => void;
}
