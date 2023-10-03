import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanListComponent } from './span-list/span-list.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SpanListComponent,
  ],
  exports: [
    SpanListComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class SpanModule { }
