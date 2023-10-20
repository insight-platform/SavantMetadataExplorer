import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITreeSpan } from '../../../api/models/model';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-span-selector',
  templateUrl: './span-selector.component.html',
  styleUrls: ['./span-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpanSelectorComponent),
      multi: true,
    },
  ],
})
export class SpanSelectorComponent implements OnChanges, ControlValueAccessor {
  @Input() spans: ITreeSpan[];
  spanFormGroup: FormGroup | null;
  showSelector = false;

  ngOnChanges(changes: SimpleChanges) {
    if ('spans' in changes && this.spans.length) {
      this.spanFormGroup = new FormGroup(this._returnForm(this.spans));
      this.showSelector = true;
    } else {
      this.showSelector = false;
      this.spanFormGroup = null;
    }
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this._onChange = fn;
  }

  // eslint-disable-next-line
  registerOnTouched(fn: any): void {
  }
  // eslint-disable-next-line
  writeValue(obj: any): void {
  }

  check(value, spanID, formGroup) {
    if (formGroup) {
      this._selectControls(formGroup, value);
    }
    this._onChange(this._returnValue(this.spanFormGroup?.value));
  }

  hasIcon(span: ITreeSpan) {
    return this._findErrorTag(span);
  }

  private _findErrorTag(span: ITreeSpan) {
    if (span.children.length) {
      return span.children.some(childSpan => this._findErrorTag(childSpan))
    }
    return span.tags.find(tag => tag.key === 'error');
  }

  private _returnForm(spans: ITreeSpan[]) {
    return spans.map((span) => {
      if (span.children.length) {
        return {
          [span.spanID.toString()]: new FormControl(false, { nonNullable: true }),
          [span.spanID + '_group']: new FormGroup(this._returnForm(span.children)),
        }
      } else {
        return {
          [span.spanID.toString()]: new FormControl(false, { nonNullable: true }),
        }
      }
    }).reduce((res, field) => ({...res, ...field }), {});
  }

  private _selectControls(formGroup: FormGroup, value) {
    Object.keys(formGroup.controls).forEach(key => {
      if (key.indexOf('_group') === -1) {
        formGroup.get(key)?.setValue(value, {emitEvent: false});
      } else {
        this._selectControls(formGroup.get(key) as FormGroup, value);
      }
    });
  }

  private _returnValue(value): string[] {
    return Object.keys(value).reduce<string[]>((res, key) => {
      if (key.indexOf('_group') === -1) {
        return [
          ...res, value[key] ? key : ''
        ];
      } else {
        return [
          ...res,
          ...this._returnValue(value[key]),
        ];
      }
    }, []).filter(key => key !== '');
  }

  // eslint-disable-next-line
  private _onChange = (_: string[]) => {};
}
