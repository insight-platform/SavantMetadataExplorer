import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFrameJson, IFrameJsonObject } from '../../api/models/span';
import { INodeObject } from '../node-object';
import { isNil } from 'lodash';

@Component({
  selector: 'sf-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameContainerComponent {
  @Input() frame: IFrameJson;
  @Input() comparedFrame: IFrameJson | undefined;
  isExpanded = false;
  selectedNode: INodeObject | undefined = undefined;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  displaySide(node: INodeObject) {
    this.isExpanded = !isNil(node);
    this.selectedNode = node;
  }
}
