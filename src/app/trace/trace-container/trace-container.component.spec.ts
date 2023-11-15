import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceContainerComponent } from './trace-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../projects/savant-lib/src/utils';
import { FrameModule, LogModule, SpanModule } from '../../../../projects/savant-lib/src/components';

describe('TraceContainerComponent', () => {
  let component: TraceContainerComponent;
  let fixture: ComponentFixture<TraceContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraceContainerComponent],
      imports: [
        HttpClientTestingModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        SharedModule,
        SpanModule,
        MatTooltipModule,
        MatButtonModule,
        FrameModule,
        LogModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(TraceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
