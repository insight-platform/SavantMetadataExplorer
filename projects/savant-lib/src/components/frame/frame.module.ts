import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameContainerComponent } from './frame-container/frame-container.component';
import { FrameDetailsComponent } from './frame-details/frame-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { FrameTreeComponent } from './frame-tree/frame-tree.component';
import { ObjectDetailsComponent } from './object-details/object-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../utils';

@NgModule({
  declarations: [
    FrameContainerComponent,
    FrameDetailsComponent,
    FrameTreeComponent,
    ObjectDetailsComponent,
  ],
  exports: [
    FrameContainerComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatExpansionModule,
    SharedModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class FrameModule { }
