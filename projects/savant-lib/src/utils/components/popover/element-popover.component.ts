import {
  booleanAttribute, Component, EventEmitter, Input, Output, TemplateRef,
} from '@angular/core';

@Component({
  selector: 'savant-lib-element-popover',
  templateUrl: 'element-popover.component.html',
  styleUrls: ['element-popover.component.scss'],
})
export class ElementPopoverComponent {
  @Output() closed = new EventEmitter<void>();
  @Input({ transform: booleanAttribute }) disableCloseOnMouseLeave = false;

  @Input() public popoverTemplate: TemplateRef<any>;
  @Input() public popoverPosition: [number, number];
}
