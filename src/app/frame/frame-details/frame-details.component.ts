import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IFrameJson } from '../../api/models/span';
import { uniq } from 'lodash';
import { FrameDifference, getFrameDifference } from '../../utils/get-difference';

@Component({
  selector: 'sf-frame-details',
  templateUrl: './frame-details.component.html',
  styleUrls: ['./frame-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
      console.log(this.frameDifferences);
      if (this.frameDifferences.addedKeys?.length) {
        const newData = this.frameDifferences.addedKeys
          // @ts-ignore
          .map(key => ({ key, value: this.comparedFrame[key], state: 'new' }));
        this.frameDataSource = [...this.frameData, ...newData];
      }
      this._cdr.detectChanges();
    }
  }

  getValues(values: any[]) {
    return  JSON.stringify(values,null, 2);
  }

  getJsonData() {
    return JSON.stringify(this.frame, null, 2);
  }
}
