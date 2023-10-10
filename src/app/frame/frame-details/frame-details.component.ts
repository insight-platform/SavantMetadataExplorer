import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { getArrayValue, getValue, IAttributes, IFrameJson } from '../../api/models/span';
import { isNil, isObject, uniq } from 'lodash';
import { FrameDifference, getFrameDifference } from '../../utils/get-difference';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  frameDataSource: any[] = [];
  frameData: any[] = [];
  attributeDataSources: any[] = [];
  attributeNamespaces: string[] = [];
  displayedFrameColumns = ['key', 'value'];
  displayedAttributeColumns = ['name', 'hint', 'values', 'is_persistent'];
  nonDisplayedFields = [
    'objects', 'attributes',
  ];
  frameDifferences: FrameDifference;
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
      this.frameDataSource = [...this.frameData];
    }
    if ('comparedFrame' in changes &&  this.comparedFrame && this.frame) {
      this.frameDifferences = getFrameDifference(this.frame, this.comparedFrame);
      if (this.frameDifferences.addedKeys?.length) {
        const newData = this.frameDifferences.addedKeys
          // @ts-ignore
          .map(key => ({ key, value: this.comparedFrame[key], state: 'new' }));
        this.frameDataSource = [...this.frameData, ...newData];
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
    return JSON.stringify(value, null, 2);
  }

  getJsonData() {
    return JSON.stringify(this.frame, null, 2);
  }
}
