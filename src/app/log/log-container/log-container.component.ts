import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getLogValue, ILog, ISpan } from '../../api/models/span';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sf-log-container',
  templateUrl: './log-container.component.html',
  styleUrls: ['./log-container.component.scss']
})
export class LogContainerComponent implements OnChanges {
  @Input() spans: ISpan[] = [];
  @Input() logFilter: { level: string[]; target: string[] } = { level: [], target: [] };
  safeLogs: ILog[] = [];

  private _logLevels = ['Info', 'Warn', 'Debug', 'Error', 'Fatal', 'Critical', 'Warning', 'Trace'];

  constructor(private _domSanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
   if (('spans' in changes || 'logFilter' in changes) && this.spans) {
     this.safeLogs = this.spans.reduce<ILog[]>((res, span) => [
       ...res,
       ...span.logs
         .filter(log =>
           !(this.logFilter.level && this.logFilter.level.length) ||
           log.fields.some(field => field.key === 'log.level' && this.logFilter.level.indexOf(field.value) !== -1))
         .filter(log =>
           !(this.logFilter.target && this.logFilter.target.length) ||
           log.fields.some(field => field.key === 'log.target' && this.logFilter.target.indexOf(field.value) !== -1))
         .map(log => ({
         timestamp: (new Date(log.timestamp)).toUTCString(),
         lines: this._decorateLines(getLogValue(log.fields)),
       } as ILog)),
     ], []);
   }
  }

  private _decorateLines(lines: string[]): SafeHtml[] {
    return lines.map(line => {
      this._logLevels.forEach((level) => {
        const regex = new RegExp('(\\[' + level + '])', 'gm');
        line = line.replace(regex,'<span class="' + level.toLowerCase() + '">$1</span>');
      });
      line = line.replace(/(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2},\d{3})/gm, '<span class="time">$1</span>');
      return this._domSanitizer.bypassSecurityTrustHtml(line);
    });
  }

}
