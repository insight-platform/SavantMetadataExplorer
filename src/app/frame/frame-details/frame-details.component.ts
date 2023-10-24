import {
  Component,
  Input,
} from '@angular/core';
import { IFrameJson } from 'sf';
import {
  getFullFrameDiffAsString,
} from '../../utils/get-difference';
import { jsonColorPrint } from '../../utils/json-color-print';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'sf-frame-details',
  templateUrl: './frame-details.component.html',
  styleUrls: ['./frame-details.component.scss'],
})
export class FrameDetailsComponent {
  @Input() frame: IFrameJson;
  @Input() comparedFrame: IFrameJson | undefined;
  showJson = false;

  constructor(private _clipboard: Clipboard,
              private _snackBar: MatSnackBar) {
  }

  copyFrame() {
    this._clipboard.copy(JSON.stringify(this.frame));
    this._snackBar.open('Data copied',
        'Close', { duration: 5000 });
  }

  getJsonData() {
    return jsonColorPrint(this.frame);
  }

  getJsonDataDiff(frame, comparedFrame) {
    return jsonColorPrint(getFullFrameDiffAsString(frame, comparedFrame))
  }
}
