import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getLogValue, ILogFilter, ISafeLog, ISpan, ISpanLog } from '../../../models/model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { translateMicroSecondsToTimeString } from '../../../utils';

@Component({
  selector: 'sf-lib-log-container',
  templateUrl: './log-container.component.html',
  styleUrls: ['./log-container.component.scss']
})
export class LogContainerComponent implements OnChanges {
  @Input() spans: ISpan[] = [];
  @Input() logFilter: ILogFilter = { level: [], target: [], search: '', spans: [] };
  safeLogs: ISafeLog[] = [];

  private _logLevels = ['Info', 'Warn', 'Debug', 'Error', 'Fatal', 'Critical', 'Warning', 'Trace'];
  private _dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };


  constructor(private _domSanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
   if (('spans' in changes || 'logFilter' in changes) && this.spans) {
     this.safeLogs = this.spans
       .filter(span => !this.logFilter.spans.length || this.logFilter.spans.includes(span.spanID))
       .reduce<ISpanLog[]>((res, span) => [
           ...res,
           ...span.logs
             .filter(log =>
               !(this.logFilter.level && this.logFilter.level.length) ||
               log.fields.some(field => field.key === 'log.level' && this.logFilter.level.indexOf(field.value) !== -1))
             .filter(log =>
               !(this.logFilter.target && this.logFilter.target.length) ||
               log.fields.some(field => field.key === 'log.target' && this.logFilter.target.indexOf(field.value) !== -1)),
         ],
         []
       )
       .sort((l1, l2) => l1.timestamp - l2.timestamp)
       .map(log => ({
         timestamp: log.timestamp,
         lines: getLogValue(log.fields),
       }))
       .filter(log =>
         !(this.logFilter.search && this.logFilter.search !== '') ||
         log.lines.some(line => line.toLowerCase().indexOf(this.logFilter.search.toLowerCase()) !== -1))
       .map((log, i, logs) => ({
         timestamp:  (new Date(Math.floor(log.timestamp / 1000))).toLocaleDateString('en-UK',
           {...this._dateOptions} as Intl.DateTimeFormatOptions),
         startTimestampDelta: translateMicroSecondsToTimeString(log.timestamp - logs[0].timestamp),
         previousTimestampDelta: i === 0 ? '0 s' : translateMicroSecondsToTimeString(log.timestamp - logs[i - 1].timestamp),
         lines: this._decorateLines(log.lines, this.logFilter.search),
       }));
   }
  }

  private _decorateLines(lines: string[], highlight = ''): SafeHtml[] {
    return lines.map(line => {
      this._logLevels.forEach((level) => {
        const regex = new RegExp('(\\[' + level + '])', 'gm');
        line = line.replace(regex,'<span class="' + level.toLowerCase() + '">$1</span>');
      });
      line = line.replace(/(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2},\d{3})/gm, '<span class="time">$1</span>');
      if (highlight) {
        const highlightRegex = new RegExp('(' + highlight.toLowerCase() + ')', 'gmi');
        line = line.replace(highlightRegex, '<span class="highlighted">$1</span>');
      }
      return this._domSanitizer.bypassSecurityTrustHtml(line);
    });
  }

}
