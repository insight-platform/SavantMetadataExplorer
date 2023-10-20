import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceContainerComponent } from './trace-container/trace-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from '../utils/shared/shared.module';
import { SpanModule } from '../span/span.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FrameModule } from '../frame/frame.module';
import { LogModule } from '../log/log.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
