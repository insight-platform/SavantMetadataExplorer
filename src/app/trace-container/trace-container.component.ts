import { Component } from '@angular/core';
import { IFrameJson, ISpan } from '../api/models/span';
import { isNil, uniq } from 'lodash';
import { FormControl } from '@angular/forms';
import { TraceService } from '../api/services/trace.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'sf-trace-container',
  templateUrl: './trace-container.component.html',
  styleUrls: ['./trace-container.component.scss']
})
export class TraceContainerComponent {
  traceId = 'cb8b182cff2f87b73b5d1fcbe0bb846d';
  traceIdFormControl = new FormControl<string>('', {nonNullable: true});
  spansWithFrame: ISpan[] = [];
  spansWithLog: ISpan[] = [];
  frame: IFrameJson | undefined;
  comparedFrame: IFrameJson | undefined;
  selectedFrameIndex = -1;
  selectedComparedFrameIndex = -1;
  namespaces: string[] = [];
  labels: string[] = [];
  objectFilter: { namespace: string; label: string}[] = [];
  logFilter: { level: string[]; target: string[]; search: string } = { level: [], target: [], search: '' };
  logTargets: string[] = [];
  noSpanWithFrames = false;
  selectedView: 'span'|'log' = 'span';

  constructor(private _traceService: TraceService) {
    this.traceIdFormControl.setValue('573d571712dc976333d4d83676c6c8e4');
  }

  searchTrace() {
    const traceId = this.traceIdFormControl.value;
    if (traceId) {
      this._traceService.get(traceId)
        .subscribe(trace => {
          console.log(trace);
          if (!trace.traceID) {
            this.noSpanWithFrames = false;
            this.spansWithFrame = [];
            this.spansWithLog = [];
            this.logTargets = [];
            return;
          }
          this.selectedFrameIndex = -1;
          this.selectedComparedFrameIndex = -1;
          this.spansWithFrame = trace.spans.filter(span => span.tags &&
            span.tags.length &&
            span.tags.find(tag => tag.key === 'frame_json'))
            .sort((span1,span2 ) => span1.startTime - span2.startTime);
          this.spansWithLog = trace.spans.filter(span => span.logs && span.logs.length)
            .sort((span1,span2 ) => span1.startTime - span2.startTime);
          this.logTargets = uniq(
            trace.spans.filter(span => span.logs && span.logs.length)
              .reduce<string[]>((res, span) => [
                ...res,
                ...span.logs.reduce<string[]>((r, log) => [
                  ...r,
                  log.fields.find(field => field.key === 'log.target')?.value || '',
                ], []),
              ], [])
              .filter(t => t !== '')
          ).sort((t1,t2) => t1.localeCompare(t2));
          console.log(this.spansWithFrame);
          this.noSpanWithFrames = !this.spansWithFrame || this.spansWithFrame.length === 0;
        })
    }
  }

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
      const spanTagValue = this.spansWithFrame[index].tags.find(tag => tag.key === 'frame_json')?.value;
      this.frame = typeof spanTagValue === 'string' ? JSON.parse(spanTagValue) as IFrameJson : spanTagValue;

      if (this.frame) {
        this.namespaces = uniq(this.frame.objects.map(_ => _.namespace));
        this.labels = uniq(this.frame.objects.map(_ => _.label));
      }
    }, 100);
  }

  setComparedFrame(index: number) {
    this.comparedFrame = undefined;
    if (this.selectedComparedFrameIndex !== index) {
      setTimeout(() => {
        this.selectedComparedFrameIndex = index;
        const spanTagValue = this.spansWithFrame[index].tags.find(tag => tag.key === 'frame_json')?.value;
        this.comparedFrame = typeof spanTagValue === 'string' ? JSON.parse(spanTagValue) as IFrameJson : spanTagValue;
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
