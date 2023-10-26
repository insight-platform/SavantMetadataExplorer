import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { defaultTooltips, TOOLTIP_LABELS, Tooltips } from '../../../lib-labels';

@Component({
  selector: 'savant-lib-side-actions',
  templateUrl: './side-actions.component.html',
  styleUrls: ['./side-actions.component.scss']
})
export class SideActionsComponent {
  @Output() showJson: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() copyData: EventEmitter<void> = new EventEmitter<void>();
  isJson = false;

  constructor(@Optional() @Inject(TOOLTIP_LABELS) public tooltipLabels: Record<Tooltips, string>) {
    if (!this.tooltipLabels) {
      this.tooltipLabels = defaultTooltips;
    }
  }
}
