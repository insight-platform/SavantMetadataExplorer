import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISpan } from '../../../models/model';

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
}
