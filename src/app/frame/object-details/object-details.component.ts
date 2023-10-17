import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getArrayValue, IAttributes, IFrameJson, IFrameJsonObject } from '../../api/models/span';
import { cloneDeep, uniq } from 'lodash';
import {
  getAttributesDifference, getFrameDiffAsString,
  getFrameObjectDiff, getFrameObjectDiffAsString, getFrameObjectDiffAsString1,
  getValueDiffAsString,
} from '../../utils/get-difference';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { jsonColorPrint } from '../../utils/json-color-print';

@Component({
  selector: 'sf-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ObjectDetailsComponent implements OnChanges {
  @Input() frameObject: IFrameJsonObject
  @Input() comparedFrame: IFrameJson | undefined
  showJson = false;
  expandedElement: IAttributes | null;
  frameObjectDataSource: { key: string; value: any; state?: string; oldValue?: any }[] = [];
  frameObjectData: any[] = [];
  attributeDataSources: any[] = [];
  attributeNamespaces: string[] = [];

  displayedFrameColumns = ['key', 'value'];
  displayedAttributeColumns = ['name', 'hint', 'values', 'is_persistent'];

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('frameObject' in changes && this.frameObject || 'comparedFrame' in changes && this.frameObject) {
      this.frameObjectData = Object.keys(this.frameObject)
        .filter(key => !['attributes', 'children'].includes(key))
        .map(key => ({key, value: this.frameObject[key]}));
      this.attributeNamespaces = uniq(this.frameObject.attributes.map(attribute => attribute.namespace));
      this.attributeDataSources = this.attributeNamespaces.map((namespace) => ({
        namespace,
        attributes: this.frameObject.attributes
          .filter(attribute => attribute.namespace === namespace),
        // .map(attribute => Object.keys(attribute).map(key => ({ key, value: attribute[key] }))),
      }))
      this.frameObjectDataSource = cloneDeep(this.frameObjectData);

      if (this.comparedFrame) {
        const comparedFrameObject = this.comparedFrame.objects.find(object => object.id === this.frameObject.id);
        if (comparedFrameObject) {
          const changes = getFrameObjectDiff(this.frameObject, comparedFrameObject, ['attributes', 'children']);
          if (changes.adds.length) {
            const newData = changes.adds
              // @ts-ignore
              .map(change => ({key: change.key, value: change.value, state: 'new'}));
            this.frameObjectDataSource = [...cloneDeep(this.frameObjectData), ...newData];
          }
          if (changes.updates.length) {
            changes.updates
              .forEach(change => {
                const frameDS = this.frameObjectDataSource.find(frameDS => frameDS.key === change.key);
                if (frameDS) {
                  frameDS.value = change.value;
                  frameDS.oldValue = change.oldValue;
                  frameDS.state = 'updated';
                }
              })
          }

          const attributeChanges = getAttributesDifference(this.frameObject.attributes, comparedFrameObject.attributes);
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
        }
      }
      this._cdr.detectChanges();
    }
  }

  getJsonData() {
    return jsonColorPrint(this.frameObject);
  }

  getJsonDataDiff() {
    if (this.comparedFrame) {
      const comparedFrameObject = this.comparedFrame.objects.find(object => object.id === this.frameObject.id);
      return comparedFrameObject && jsonColorPrint(getFrameObjectDiffAsString1(this.frameObject, comparedFrameObject, ['children']))
    }
    return '';
  }

  getElementValueAsArray(value: any): string[] {
    return getArrayValue(value);
  }

  getJsonDiff(value1: any, value2: any) {
    return jsonColorPrint(getValueDiffAsString(value1, value2));
  }

  getJson(value: any) {
    return jsonColorPrint(value);
  }
}
