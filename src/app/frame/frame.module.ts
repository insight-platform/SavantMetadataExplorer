import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameContainerComponent } from './frame-container/frame-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FrameDetailsComponent } from './frame-details/frame-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { LocalMiElementPopoverModule } from '../utils/popover/popover-module';
import { FrameTreeComponent } from './frame-tree/frame-tree.component';



@NgModule({
  declarations: [
    FrameContainerComponent,
    FrameDetailsComponent,
    FrameTreeComponent,
  ],
  exports: [
    FrameContainerComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    LocalMiElementPopoverModule,
  ],
})
export class FrameModule { }
