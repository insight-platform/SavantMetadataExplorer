import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { INodeObject } from '../node-object';
import { isNil } from 'lodash';
import { IFrameJson } from '../../../models/model';
import { Palette } from '../../../utils';

@Component({
  selector: 'savant-lib-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.scss'],
})
export class FrameContainerComponent implements OnChanges {
  @Input() frame: IFrameJson | undefined;
  @Input() comparedFrame: IFrameJson | undefined;
  @Input() objectFilter: { namespace: string; label: string}[]
  @Input() colorPalette: Palette = Palette.amber;
  isExpanded = false;
  selectedNode: INodeObject | undefined = undefined;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('frame' in changes) {
      this.isExpanded = false;
      this.selectedNode = undefined;
    }
  }

  displaySide(node: INodeObject) {
    this.isExpanded = !isNil(node);
    this.selectedNode = node;
  }

  closeSide() {
    this.isExpanded = false;
    this.selectedNode = undefined;
  }
}
