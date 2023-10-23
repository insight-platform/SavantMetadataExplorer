import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getArrayValue, IFrameJson, IFrameJsonObject } from '../../../api/models/model';
import { jsonColorPrint } from '../../json-color-print';
import { getDataDiff, getValueDiffAsString } from '../../get-difference';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'sf-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnChanges {
  @Input() data: IFrameJson | IFrameJsonObject;
  @Input() comparedData: IFrameJson | IFrameJsonObject | undefined;
  dataSource: any[] = [];
  displayedDataSource: { key: string; value: any; state?: string; oldValue?: any }[] = [];
  displayedColumns = ['key', 'value'];
  nonDisplayedFields = [
    'objects', 'attributes', 'children',
  ];

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = Object.keys(this.data)
      .filter(key => !this.nonDisplayedFields.includes(key))
      .map(key => ({key, value: this.data[key]}));
    this.displayedDataSource = cloneDeep(this.dataSource);
    if ('comparedData' in changes && this.data) {
      if (this.comparedData) {
        const changes = getDataDiff(this.data, this.comparedData, ['objects', 'attributes']);
        if (changes.adds.length) {
          const newData = changes.adds
            // eslint-disable-next-line
            .map(change => ({key: change.key, value: change.value, state: 'new'}));
          this.displayedDataSource = [...cloneDeep(this.dataSource), ...newData];
        }
        if (changes.updates.length) {
          changes.updates
            .forEach(change => {
              const frameDS = this.displayedDataSource.find(frameDS => frameDS.key === change.key);
              if (frameDS) {
                frameDS.value = change.value;
                frameDS.oldValue = change.oldValue;
                frameDS.state = 'updated';
              }
            })
        }
      } else {
        this.displayedDataSource = cloneDeep(this.dataSource);
      }
      this._cdr.detectChanges();
    }
  }

  getElementValueAsArray(value: any): string[] {
    return getArrayValue(value);
  }

  getJson(value: any) {
    return jsonColorPrint(value);
  }

  getJsonDiff(value1: any, value2: any) {
    return jsonColorPrint(getValueDiffAsString(value1, value2));
  }
}
