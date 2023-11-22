import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceContainerComponent } from './trace-container/trace-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../../../projects/savant-lib/src/utils';
import { FrameModule, LogModule, SpanModule } from '../../../projects/savant-lib/src/components';

@NgModule({
  declarations: [
    TraceContainerComponent,
  ],
  exports: [
    TraceContainerComponent,
  ],
  imports: [
    CommonModule,
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
  ],
})
export class TraceModule { }
