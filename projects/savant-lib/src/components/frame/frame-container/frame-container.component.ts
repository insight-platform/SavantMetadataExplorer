import { ChangeDetectorRef, Component, Inject, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { INodeObject } from '../node-object';
import { isNil } from 'lodash';
import { IFrameJson } from '../../../models/model';
import { Palette } from '../../../utils';
import {
  defaultLibLabels,
  defaultTooltips,
  LIB_LABELS,
  LibLabels,
  TOOLTIP_LABELS,
  Tooltips,
} from '../../../lib-labels';

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

  constructor(private _cdr: ChangeDetectorRef,
              @Optional() @Inject(LIB_LABELS) public libLabels: Record<LibLabels, string>,
              @Optional() @Inject(TOOLTIP_LABELS) public tooltipLabels: Record<Tooltips, string>) {
    if (!this.libLabels) {
      this.libLabels = defaultLibLabels;
    }
    if (!this.tooltipLabels) {
      this.tooltipLabels = defaultTooltips;
    }
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
