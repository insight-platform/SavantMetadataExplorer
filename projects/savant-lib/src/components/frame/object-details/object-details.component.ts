import { Component, Inject, Input, OnChanges, Optional } from '@angular/core';
import { IFrameJson, IFrameJsonObject } from '../../../models/model';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cloneDeep } from 'lodash';
import { getFullFrameObjectDiffAsString, jsonColorPrint } from '../../../utils';
import { defaultLibLabels, LIB_LABELS, LibLabels } from '../../../lib-labels';

@Component({
  selector: 'savant-lib-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
})
export class ObjectDetailsComponent implements OnChanges {
  @Input() frameObject: IFrameJsonObject;
  @Input() comparedFrame: IFrameJson | undefined;
  comparedFrameObject: IFrameJsonObject | undefined;
  showJson = false;

  constructor(private _clipboard: Clipboard,
              private _snackBar: MatSnackBar,
              @Optional() @Inject(LIB_LABELS) public libLabels: Record<LibLabels, string>) {
    if (!this.libLabels) {
      this.libLabels = defaultLibLabels;
    }
  }

  ngOnChanges() {
    if (this.comparedFrame) {
      this.comparedFrameObject = this.comparedFrame.objects.find(object => object.id === this.frameObject.id);
    } else {
      this.comparedFrameObject = undefined;
    }
  }

  copyFrameObject() {
    this._clipboard.copy(JSON.stringify(this.frameObject));
    this._snackBar.open('Data copied',
      'Close', { duration: 5000 });
  }

  getJsonData() {
    const frameObject = cloneDeep(this.frameObject);
    delete frameObject['children'];
    return jsonColorPrint(frameObject);
  }

  getJsonDataDiff() {
    if (this.comparedFrameObject) {
      return jsonColorPrint(getFullFrameObjectDiffAsString(this.frameObject, this.comparedFrameObject, ['children']))
    }
    return '';
  }
}
