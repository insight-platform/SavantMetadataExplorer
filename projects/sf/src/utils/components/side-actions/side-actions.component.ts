import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sf-lib-side-actions',
  templateUrl: './side-actions.component.html',
  styleUrls: ['./side-actions.component.scss']
})
export class SideActionsComponent {
  @Output() showJson: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() copyData: EventEmitter<void> = new EventEmitter<void>();
  isJson = false;
}
