import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectFilterComponent } from './object-filter/object-filter.component';
import { SpanSelectorComponent } from './span-selector/span-selector.component';
import { LogFilterComponent } from './log-filter/log-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ObjectFilterComponent,
    LogFilterComponent,
    SpanSelectorComponent,
  ],
  exports: [
    ObjectFilterComponent,
    LogFilterComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class SharedModule { }
