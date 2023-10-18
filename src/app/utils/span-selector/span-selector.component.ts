import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITreeSpan } from '../../api/models/span';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNil } from 'lodash';

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
  returnForm = (spans: ITreeSpan[]) => {
    return spans.map((span) => {
      if (span.children.length) {
        return {
          [span.spanID.toString()]: new FormControl(false, { nonNullable: true }),
          [span.spanID + '_group']: new FormGroup(this.returnForm(span.children)),
        }
      } else {
        return {
          [span.spanID.toString()]: new FormControl(false, { nonNullable: true }),
        }
      }
    }).reduce((res, field) => ({...res, ...field }), {});
  };
  selectControls = (formGroup: FormGroup, value) => {
    Object.keys(formGroup.controls).forEach(key => {
      if (key.indexOf('_group') === -1) {
        formGroup.get(key)?.setValue(value, {emitEvent: false});
      } else {
        this.selectControls(formGroup.get(key) as FormGroup, value);
      }
    });
  }
  returnValue = (value): string[] => {
    return Object.keys(value).reduce<string[]>((res, key) => {
      if (key.indexOf('_group') === -1) {
        return [
          ...res, value[key] ? key : ''
        ];
      } else {
        return [
          ...res,
          ...this.returnValue(value[key]),
        ];
      }
    }, []).filter(key => key !== '');
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('spans' in changes && this.spans.length) {
      this.spanFormGroup = new FormGroup(this.returnForm(this.spans));
      this.showSelector = true;
    } else {
      this.showSelector = false;
      this.spanFormGroup = null;
    }
  }

  check(value, spanID, formGroup) {
    if (formGroup) {
      this.selectControls(formGroup, value);
    }
    this._onChange(this.returnValue(this.spanFormGroup?.value));
  }

  hasIcon(span: ITreeSpan) {
    return span.tags.find(tag => tag.key === 'error');
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _onChange = (_: string[]) => {};
}
