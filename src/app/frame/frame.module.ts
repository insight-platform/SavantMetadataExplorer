import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameContainerComponent } from './frame-container/frame-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FrameDetailsComponent } from './frame-details/frame-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { LocalMiElementPopoverModule } from '../utils/shared/popover/popover-module';
import { FrameTreeComponent } from './frame-tree/frame-tree.component';
import { ObjectDetailsComponent } from './object-details/object-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';



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
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    LocalMiElementPopoverModule,
    MatTooltipModule,
  ],
})
export class FrameModule { }
