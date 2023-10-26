import { Component, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { ISpan } from '../../../models/model';
import {
  defaultLibLabels,
  defaultTooltips,
  LIB_LABELS,
  LibLabels,
  TOOLTIP_LABELS,
  Tooltips,
} from '../../../lib-labels';

@Component({
  selector: 'savant-lib-span-list',
  templateUrl: './span-list.component.html',
  styleUrls: ['./span-list.component.scss']
})
export class SpanListComponent {
  @Input() spans: ISpan[] = [];
  @Input() selectedIndex = -1;
  @Input() selectedCompareIndex = -1;
  @Output() selectedSpan: EventEmitter<number> = new EventEmitter<number>();
  @Output() compareSpan: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    @Optional() @Inject(LIB_LABELS) public libLabels: Record<LibLabels, string>,
    @Optional() @Inject(TOOLTIP_LABELS) public tooltipLabels: Record<Tooltips, string>) {
    if (!this.libLabels) {
      this.libLabels = defaultLibLabels;
    }
    if (!this.tooltipLabels) {
      this.tooltipLabels = defaultTooltips;
    }
  }

}
