import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFilterComponent } from './log-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent } from 'ng-mocks';
import { SpanSelectorComponent } from '../span-selector/span-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LogFilterComponent', () => {
  let component: LogFilterComponent;
  let fixture: ComponentFixture<LogFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogFilterComponent, MockComponent(SpanSelectorComponent)],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    });
    fixture = TestBed.createComponent(LogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
