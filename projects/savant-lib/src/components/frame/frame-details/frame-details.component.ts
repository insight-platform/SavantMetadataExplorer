import {
  Component,
  Input,
} from '@angular/core';
import { IFrameJson } from '../../../models/model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { getFullFrameDiffAsString, jsonColorPrint } from '../../../utils';

@Component({
  selector: 'savant-lib-frame-details',
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
