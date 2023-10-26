import { Component, Inject, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { getArrayValue, IAttributes } from '../../../models/model';
import { uniq } from 'lodash';
import { jsonColorPrint } from '../../json-color-print';
import {
  getAttributesDifference,
  getAttributeValuesDiff,
  getValueDiff,
} from '../../get-difference';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ATTRIBUTE_LABELS,
  AttributeLabels,
  defaultAttributeLabels,
  defaultLibLabels,
  LIB_LABELS,
  LibLabels,
} from '../../../lib-labels';

@Component({
  selector: 'savant-lib-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AttributeListComponent implements OnChanges {
  @Input() attributes: IAttributes[];
  @Input() comparedAttributes: IAttributes[] | undefined;
  attributeDataSources: {
    namespace: string;
    attributes: IAttributes[];
    state?: string;
    updatedAttributes: IAttributes[];
  }[] = [];
  attributeNamespaces: string[] = [];
  displayedAttributeColumns = ['name', 'hint', 'values', 'is_persistent'];

  expandedElement: IAttributes | null;

  constructor(@Optional() @Inject(ATTRIBUTE_LABELS) public attributeLabels: Record<AttributeLabels, string>,
              @Optional() @Inject(LIB_LABELS) public libLabels: Record<LibLabels, string>) {
    if (!this.attributeLabels) {
      this.attributeLabels = defaultAttributeLabels;
    }
    if (!this.libLabels) {
      this.libLabels = defaultLibLabels;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('comparedAttributes' in changes || 'attributes' in changes) {
      if (this.attributes) {
        this.attributeNamespaces = uniq(this.attributes.map(attribute => attribute.namespace));
        this.attributeDataSources = this.attributeNamespaces.map((namespace) => ({
          namespace,
          attributes: this.attributes
            .filter(attribute => attribute.namespace === namespace),
          updatedAttributes: [],
        }))
      }
      if (this.comparedAttributes) {
        const attributeChanges = getAttributesDifference(this.attributes, this.comparedAttributes);
        if (attributeChanges.addedNamespaces) {
          attributeChanges.addedNamespaces.forEach(namespace => {
            // eslint-disable-next-line
            this.attributeDataSources.push({
              namespace,
              state: 'new',
              // @ts-ignore
              attributes: this.comparedAttributes.filter(attribute => attribute.namespace === namespace),
              updatedAttributes: [],
            })
          });
        }
        if (attributeChanges.removedNamespaces) {
          attributeChanges.removedNamespaces.forEach(namespace => {
            const attributeDS = this.attributeDataSources.find(dataSource => dataSource.namespace === namespace);
            if (attributeDS) {
              attributeDS.state = 'removed';
            }
          })
        }
        if (attributeChanges.updatedNamespaces) {
          attributeChanges.updatedNamespaces.forEach(namespace => {
            const attributeDS = this.attributeDataSources.find(dataSource => dataSource.namespace === namespace);
            if (attributeDS) {
              attributeDS.state = 'updated';
              attributeDS.attributes.forEach((attribute, index) => {
                // @ts-ignore
                const comparedAttribute = this.comparedAttributes.find(a => a.namespace === namespace);
                if (getValueDiff(attribute, comparedAttribute).length) {
                  // @ts-ignore
                  attributeDS.updatedAttributes[index] = comparedAttribute;
                }
              });
            }
          })
        }
      }
    }
  }

  getElementValueAsArray(value: any): string[] {
    return getArrayValue(value);
  }

  getJson(value: any) {
    return jsonColorPrint(value);
  }

  getJsonDiff(value1: any, value2: any) {
    return jsonColorPrint(getAttributeValuesDiff(value1, value2));
  }
}
