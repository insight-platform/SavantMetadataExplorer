import { Component, EventEmitter, Inject, Input, OnChanges, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNil } from 'lodash';
import { MatSelect } from '@angular/material/select';
import { defaultLibLabels, LIB_LABELS, LibLabels } from '../../../lib-labels';

@Component({
  selector: 'savant-lib-object-filter',
  templateUrl: './object-filter.component.html',
  styleUrls: ['./object-filter.component.scss'],
})
export class ObjectFilterComponent implements OnChanges {
  @Input() namespaces: string[] = [];
  @Input() labels: string[] = [];
  @Output() valueChange = new EventEmitter<{ namespace: string; label: string}[]>();
  namespaceControl = new FormControl<{ namespace: string; label: string}[]>([], {nonNullable: true});
  isAllLabelsSelected = {};

  get valueIsEmpty() {
    return this.namespaceControl.value?.length === 0;
  }

  constructor(@Optional() @Inject(LIB_LABELS) public libLabels: Record<LibLabels, string>) {
    if (!this.libLabels) {
      this.libLabels = defaultLibLabels;
    }
    this.namespaceControl.valueChanges
      .subscribe((value: { namespace: string; label: string}[]) => {
        this.namespaces.forEach(namespace => {
          this.isAllLabelsSelected[namespace] = this.labels
            .every(label => value.length && value?.find(_ => _.label === label && _.namespace === namespace))
        })
        // eslint-disable-next-line
        this.valueChange.emit(value);
      })
  }

  ngOnChanges() {
    if (!this.namespaces || !this.namespaces.length) {
      this.namespaceControl.disable();
    } else {
      this.namespaceControl.enable();
    }
  }

  compareGroups(o1: { namespace: string; label: string}, o2: { namespace: string; label: string}) {
    return o1.namespace == o2.namespace && o1.label == o2.label;
  }

  clearSelection(control: MatSelect) {
    this.namespaceControl.setValue([]);
    control.close();
  }

  toggleAllLabelsInNamespace(namespace: string, isChecked: boolean) {
    if (isChecked) {
      this.namespaceControl.setValue(
        this.labels.map(label => ({ namespace, label }))
      )
    } else {
      // eslint-disable-next-line
      const value = !isNil(this.namespaceControl.value) && this.namespaceControl.value.length ?
        this.namespaceControl.value.filter((v) => v.namespace !== namespace) : [];
      this.namespaceControl.setValue(value);
    }
  }
}
