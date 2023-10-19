import { Component } from '@angular/core';
import { IFrameJson, ILogFilter, ISpan, ITreeSpan, ReferenceType } from '../api/models/model';
import { isNil, uniq } from 'lodash';
import { FormControl } from '@angular/forms';
import { TraceService } from '../api/services/trace.service';

@Component({
  selector: 'sf-trace-container',
  templateUrl: './trace-container.component.html',
  styleUrls: ['./trace-container.component.scss']
})
export class TraceContainerComponent {
  traceId = '4a413f96acb57ab8d739a0d7ed61047d';
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
  logFilter: ILogFilter = { level: [], target: [], search: '', spans: [] };
  logTargets: string[] = [];
  spanTree: ITreeSpan[] = [];
  noSpanWithFrames = false;
  selectedView: 'span'|'log' = 'span';

  constructor(private _traceService: TraceService) {
    this.traceIdFormControl.setValue(this.traceId);
  }

  searchTrace() {
    this.frame = undefined;
    this.comparedFrame = undefined;
    this.selectedComparedFrameIndex = -1;
    this.selectedFrameIndex = -1;
    const traceId = this.traceIdFormControl.value;
    if (traceId) {
      this._traceService.get(traceId)
        .subscribe(trace => {
          if (!trace.traceID) {
            this.noSpanWithFrames = false;
            this.spansWithFrame = [];
            this.spansWithLog = [];
            this.logTargets = [];
            return;
          }
          this.spansWithFrame = trace.spans.filter(span => span.tags &&
            span.tags.length &&
            span.tags.find(tag => tag.key === 'frame_json'))
            .sort((span1,span2 ) => span1.startTime - span2.startTime);
          this.spansWithLog = trace.spans.filter(span => span.logs && span.logs.length)
            .sort((span1,span2 ) => span1.startTime - span2.startTime);

          const spanWithLogTreeData = trace.spans.filter(span => span.references.length === 0)
            .map(span => ({...span, children: []}));

          const findParentSpan = (spans: ITreeSpan[], span: ITreeSpan): ITreeSpan | null => {
            const parentObject = spans.find(_ => span.references[0].refType === ReferenceType.ChildOf && span.references[0].spanID === _.spanID);
            if (parentObject) {
              return parentObject
            } else {
              for (const object of spans) {
                const foundObject = findParentSpan(object.children, span);
                if (foundObject) {
                  return foundObject;
                }
              }
              return null;
            }
          };

          trace.spans
            .sort((a, b) =>
              (b.references[0] && b.references[0].refType === ReferenceType.ChildOf && b.references[0].spanID || '').localeCompare(
              (a.references[0] && a.references[0].refType === ReferenceType.ChildOf && a.references[0].spanID || ''))
            )
            .map(span => ({...span, children: []}))
            .forEach(span => {
              if (!isNil(span.references[0])) {
                findParentSpan(spanWithLogTreeData, span)?.children.push(span);
              }
            });
          this.spanTree = spanWithLogTreeData;
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
          this.noSpanWithFrames = !this.spansWithFrame || this.spansWithFrame.length === 0;
        })
    }
  }

  setView(view: 'span'|'log') {
    this.selectedView = view;
  }

  setLogFilter(logFilter: ILogFilter) {
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
