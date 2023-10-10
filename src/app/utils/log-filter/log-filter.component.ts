import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sf-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss']
})
export class LogFilterComponent {
  @Input() targets: string[] = [];
  @Output() valueChange = new EventEmitter<{ level: string[]; target: string[]; search: string}>();

  readonly filters = new FormGroup<{
    level: FormControl<string[]>,
    target: FormControl<string[]>,
    search: FormControl<string>,
  }>({
    level: new FormControl<string[]>([], { nonNullable: true}),
    target: new FormControl<string[]>([], { nonNullable: true}),
    search: new FormControl<string>('', { nonNullable: true}),
  });

  constructor() {
    this.filters.valueChanges
      .subscribe(value => {
        // @ts-ignore
        this.valueChange.emit(value);
      })
  }
}
