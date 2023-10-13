import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getArrayValue, IAttributes, IFrameJsonObject } from '../../api/models/span';
import { cloneDeep, uniq } from 'lodash';
import { getAttributesDifference, getFrameDiff, getValueDiffAsString } from '../../utils/get-difference';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  showJson = false;
  expandedElement: IAttributes | null;
  frameObjectDataSource: { key: string; value: any; state?: string; oldValue?: any }[] = [];
  frameObjectData: any[] = [];
  attributeDataSources: any[] = [];
  attributeNamespaces: string[] = [];

  displayedFrameColumns = ['key', 'value'];
  displayedAttributeColumns = ['name', 'hint', 'values', 'is_persistent'];

  ngOnChanges(changes: SimpleChanges) {
    if ('frameObject' in changes && this.frameObject) {
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
    }
    // if ('comparedFrame' in changes && this.frame) {
    //   if (this.comparedFrame) {
    //     const changes = getFrameDiff(this.frame, this.comparedFrame, ['objects', 'attributes']);
    //     if (changes.adds.length) {
    //       const newData = changes.adds
    //         // @ts-ignore
    //         .map(change => ({key: change.key, value: change.value, state: 'new'}));
    //       this.frameDataSource = [...cloneDeep(this.frameData), ...newData];
    //     }
    //     if (changes.updates.length) {
    //       changes.updates
    //         .forEach(change => {
    //           const frameDS = this.frameDataSource.find(frameDS => frameDS.key === change.key);
    //           if (frameDS) {
    //             frameDS.value = change.value;
    //             frameDS.oldValue = change.oldValue;
    //             frameDS.state = 'updated';
    //           }
    //         })
    //     }
    //
    //     const attributeChanges = getAttributesDifference(this.frame.attributes, this.comparedFrame.attributes);
    //     if (attributeChanges.addedNamespaces) {
    //       attributeChanges.addedNamespaces.forEach(namespace => {
    //         // @ts-ignore
    //         this.attributeDataSources.push({
    //           namespace,
    //           state: 'new',
    //           // @ts-ignore
    //           attributes: this.comparedFrame.attributes.filter(attribute => attribute.namespace === namespace),
    //         })
    //       });
    //     }
    //     if (attributeChanges.removedNamespaces) {
    //       attributeChanges.removedNamespaces.forEach(namespace => {
    //         this.attributeDataSources.find(dataSource => dataSource.namespace === namespace).state = 'removed';
    //       })
    //     }
    //     if (attributeChanges.updatedNamespaces) {
    //       attributeChanges.updatedNamespaces.forEach(namespace => {
    //         const attributeDS = this.attributeDataSources.find(dataSource => dataSource.namespace === namespace);
    //         attributeDS.state = 'updated';
    //       })
    //     }
    //   } else {
    //     this.frameDataSource = cloneDeep(this.frameData);
    //   }
    //   this._cdr.detectChanges();
    // }
  }

  getJsonData() {
    return JSON.stringify(this.frameObject, null, 2);
  }

  getElementValueAsArray(value: any): string[] {
    return getArrayValue(value);
  }

  getJsonDiff(value1: any, value2: any) {
    return JSON.stringify(getValueDiffAsString(value1, value2), null, 2);
  }

  getJson(value: any) {
    return JSON.stringify(value, null, 2);
  }
}
