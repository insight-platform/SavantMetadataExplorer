import { Component, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILogFilter, ITreeSpan } from '../../../models/model';
import { defaultLogLabels, LOG_LABELS, LogLabels } from '../../../lib-labels';

@Component({
  selector: 'savant-lib-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss']
})
export class LogFilterComponent {
  @Input() targets: string[] = [];
  @Input() spans: ITreeSpan[] = [];
  @Output() valueChange = new EventEmitter<ILogFilter>();

  readonly filters = new FormGroup<{
    level: FormControl<string[]>,
    target: FormControl<string[]>,
    search: FormControl<string>,
    spans: FormControl<string[]>,
  }>({
    level: new FormControl<string[]>([], { nonNullable: true }),
    target: new FormControl<string[]>([], { nonNullable: true }),
    search: new FormControl<string>('', { nonNullable: true }),
    spans: new FormControl<string[]>([], { nonNullable: true }),
  });

  constructor(@Optional() @Inject(LOG_LABELS) public logLabels: Record<LogLabels, string>) {
    if (!this.logLabels) {
      this.logLabels = defaultLogLabels;
    }
    this.filters.valueChanges
      .subscribe(value => {
        // @ts-ignore
        this.valueChange.emit(value);
      })
  }
}
