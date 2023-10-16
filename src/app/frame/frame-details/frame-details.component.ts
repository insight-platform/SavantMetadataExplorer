import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { getArrayValue, getValue, IAttributes, IFrameJson } from '../../api/models/span';
import { cloneDeep, isNil, isObject, uniq } from 'lodash';
import {
  getFrameDiff,
  getValueDiffAsString,
  getValueDiff,
  getAttributesDifference,
  getFrameDiffAsString,
  getFrameDiffAsString1,
} from '../../utils/get-difference';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { jsonColorPrint } from '../../utils/json-color-print';

@Component({
  selector: 'sf-frame-details',
  templateUrl: './frame-details.component.html',
  styleUrls: ['./frame-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FrameDetailsComponent implements OnChanges {
  @Input() frame: IFrameJson;
  @Input() comparedFrame: IFrameJson | undefined;
  frameDataSource: { key: string; value: any; state?: string; oldValue?: any }[] = [];
  frameData: any[] = [];
  attributeDataSources: any[] = [];
  attributeNamespaces: string[] = [];
  displayedFrameColumns = ['key', 'value'];
  displayedAttributeColumns = ['name', 'hint', 'values', 'is_persistent'];
  nonDisplayedFields = [
    'objects', 'attributes',
  ];
  showJson = false;
  expandedElement: IAttributes | null;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('frame' in changes && this.frame) {
      this.frameData = Object.keys(this.frame)
        .filter(key => !this.nonDisplayedFields.includes(key))
        .map(key => ({key, value: this.frame[key]}));
      this.attributeNamespaces = uniq(this.frame.attributes.map(attribute => attribute.namespace));
      this.attributeDataSources = this.attributeNamespaces.map((namespace) => ({
        namespace,
        attributes: this.frame.attributes
          .filter(attribute => attribute.namespace === namespace),
        // .map(attribute => Object.keys(attribute).map(key => ({ key, value: attribute[key] }))),
      }))
      this.frameDataSource = cloneDeep(this.frameData);
    }
    if ('comparedFrame' in changes && this.frame) {
      if (this.comparedFrame) {
        const changes = getFrameDiff(this.frame, this.comparedFrame, ['objects', 'attributes']);
        if (changes.adds.length) {
          const newData = changes.adds
            // @ts-ignore
            .map(change => ({key: change.key, value: change.value, state: 'new'}));
          this.frameDataSource = [...cloneDeep(this.frameData), ...newData];
        }
        if (changes.updates.length) {
          changes.updates
            .forEach(change => {
              const frameDS = this.frameDataSource.find(frameDS => frameDS.key === change.key);
              if (frameDS) {
                frameDS.value = change.value;
                frameDS.oldValue = change.oldValue;
                frameDS.state = 'updated';
              }
            })
        }

        const attributeChanges = getAttributesDifference(this.frame.attributes, this.comparedFrame.attributes);
        if (attributeChanges.addedNamespaces) {
          attributeChanges.addedNamespaces.forEach(namespace => {
            // @ts-ignore
            this.attributeDataSources.push({
              namespace,
              state: 'new',
              // @ts-ignore
              attributes: this.comparedFrame.attributes.filter(attribute => attribute.namespace === namespace),
            })
          });
        }
        if (attributeChanges.removedNamespaces) {
          attributeChanges.removedNamespaces.forEach(namespace => {
            this.attributeDataSources.find(dataSource => dataSource.namespace === namespace).state = 'removed';
          })
        }
        if (attributeChanges.updatedNamespaces) {
          attributeChanges.updatedNamespaces.forEach(namespace => {
            const attributeDS = this.attributeDataSources.find(dataSource => dataSource.namespace === namespace);
            attributeDS.state = 'updated';
          })
        }
      } else {
        this.frameDataSource = cloneDeep(this.frameData);
      }
      this._cdr.detectChanges();
    }
  }

  getElementValue(value: any): string {
    return getValue(value);
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

  getJsonData() {
    return jsonColorPrint(this.frame);
  }

  getJsonDataDiff(frame, comparedFrame) {
    return jsonColorPrint(getFrameDiffAsString1(frame, comparedFrame))
    // JSON.stringify(getFrameDiffAsString(frame, comparedFrame), null, 2);
  }
}
