import { Component } from '@angular/core';
import { IFrameJson, ISpan } from '../api/models/span';
import { data } from '../api/models/data';

@Component({
  selector: 'sf-trace-container',
  templateUrl: './trace-container.component.html',
  styleUrls: ['./trace-container.component.scss']
})
export class TraceContainerComponent {
  traceId = 'cb8b182cff2f87b73b5d1fcbe0bb846d';
  spans: ISpan[] = data.spans.filter(span => span.tags &&
      span.tags.length &&
      span.tags.find(tag => tag.key === 'frame_json'))
    .sort((span1,span2 ) => span1.startTime - span2.startTime);
  frame: IFrameJson | undefined;
  comparedFrame: IFrameJson | undefined;
  selectedFrameIndex = -1;

  setFrame(index: number) {
    this.frame = undefined;
    this.comparedFrame = undefined;
    setTimeout(() => {
      this.selectedFrameIndex = index;
      this.frame = this.spans[index].tags.find(tag => tag.key === 'frame_json')?.value as IFrameJson;
    }, 500);
  }

  setComparedFrame(index: number) {
    this.comparedFrame = undefined;
    setTimeout(() => {
      this.comparedFrame = this.spans[index].tags.find(tag => tag.key === 'frame_json')?.value as IFrameJson;
    }, 500);
  }

  selectSpan(direction: number) {
    if (direction < 0) {
      if (this.selectedFrameIndex === 0) {
        return;
      }
      this.setFrame(this.selectedFrameIndex - 1)
    } else {
      if (this.selectedFrameIndex === this.spans.length - 1) {
        return;
      }
      this.setFrame(this.selectedFrameIndex + 1);
    }
  }
}
