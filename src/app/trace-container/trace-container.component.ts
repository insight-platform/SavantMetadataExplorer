import { Component } from '@angular/core';
import { IFrameJson, ISpan } from '../api/models/span';
import { data } from '../api/models/data';
import { isNil, uniq } from 'lodash';

@Component({
  selector: 'sf-trace-container',
  templateUrl: './trace-container.component.html',
  styleUrls: ['./trace-container.component.scss']
})
export class TraceContainerComponent {
  traceId = 'cb8b182cff2f87b73b5d1fcbe0bb846d';
  spansWithFrame: ISpan[] = data.spans.filter(span => span.tags &&
      span.tags.length &&
      span.tags.find(tag => tag.key === 'frame_json'))
    .sort((span1,span2 ) => span1.startTime - span2.startTime);
  spansWithLog: ISpan[] = data.spans.filter(span => span.logs && span.logs.length)
    .sort((span1,span2 ) => span1.startTime - span2.startTime);
  frame: IFrameJson | undefined;
  comparedFrame: IFrameJson | undefined;
  selectedFrameIndex = -1;
  selectedComparedFrameIndex = -1;
  namespaces: string[] = [];
  labels: string[] = [];
  objectFilter: { namespace: string; label: string}[] = [];
  logFilter: { level: string[]; target: string[]; search: string } = { level: [], target: [], search: '' };
  logTargets: string[] = uniq(
    data.spans.filter(span => span.logs && span.logs.length)
      .reduce<string[]>((res, span) => [
        ...res,
        ...span.logs.reduce<string[]>((r, log) => [
          ...r,
          log.fields.find(field => field.key === 'log.target')?.value || '',
        ], []),
      ], [])
      .filter(t => t !== '')
  ).sort((t1,t2) => t1.localeCompare(t2));

  selectedView: 'span'|'log' = 'span';

  setView(view: 'span'|'log') {
    this.selectedView = view;
  }

  setLogFilter(logFilter: { level: string[]; target: string[]; search: string }) {
    this.logFilter = logFilter;
  }

  setObjectFilter(objectFilter: { namespace: string; label: string}[]) {
    this.objectFilter = objectFilter;
  }

  setFrame(index: number) {
    this.frame = undefined;
    this.comparedFrame = undefined;
    this.selectedComparedFrameIndex = -1;
    setTimeout(() => {
      this.selectedFrameIndex = index;
      this.frame = this.spansWithFrame[index].tags.find(tag => tag.key === 'frame_json')?.value as IFrameJson;

      this.namespaces = uniq(this.frame.objects.map(_ => _.namespace));
      this.labels = uniq(this.frame.objects.map(_ => _.label));
    }, 100);
  }

  setComparedFrame(index: number) {
    this.comparedFrame = undefined;
    if (this.selectedComparedFrameIndex !== index) {
      setTimeout(() => {
        this.selectedComparedFrameIndex = index;
        this.comparedFrame = this.spansWithFrame[index].tags.find(tag => tag.key === 'frame_json')?.value as IFrameJson;
      }, 100);
    } else {
      this.selectedComparedFrameIndex = -1;
    }
  }

  selectSpan(direction: number) {
    if (direction < 0) {
      if (this.selectedFrameIndex === 0) {
        return;
      }
      this.setFrame(this.selectedFrameIndex - 1)
    } else {
      if (this.selectedFrameIndex === this.spansWithFrame.length - 1) {
        return;
      }
      this.setFrame(this.selectedFrameIndex + 1);
    }
  }
}
