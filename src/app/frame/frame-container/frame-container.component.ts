import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFrameJson, IFrameJsonObject } from '../../api/models/span';
import { INodeObject } from '../node-object';
import { isNil } from 'lodash';
import { FrameObjectsDifference, getFrameDifference, getFrameObjectsDifference } from '../../utils/get-difference';

@Component({
  selector: 'sf-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.scss'],
})
export class FrameContainerComponent implements OnChanges {
  @Input() frame: IFrameJson | undefined;
  @Input() comparedFrame: IFrameJson | undefined;
  @Input() objectFilter: { namespace: string; label: string}[]
  isExpanded = false;
  selectedNode: INodeObject | undefined = undefined;
  frameObjectsDifference: FrameObjectsDifference | undefined = undefined;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('comparedFrame' in changes && this.frame) {
      this.frameObjectsDifference = this.comparedFrame ? getFrameObjectsDifference(this.frame.objects, this.comparedFrame.objects) : undefined;
    }
  }

  displaySide(node: INodeObject) {
    this.isExpanded = !isNil(node);
    this.selectedNode = node;
  }
}
