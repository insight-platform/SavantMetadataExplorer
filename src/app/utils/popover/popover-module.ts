import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { ElementPopoverComponent } from './element-popover.component';
import { MatIconModule } from '@angular/material/icon';
import { MiPopoverComponent } from './utils/popover';
import { MiPopoverTriggerDirective } from './utils/popover-trigger';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [OverlayModule, CommonModule, A11yModule, MatIconModule, MatCardModule],
  exports: [ElementPopoverComponent],
  declarations: [ElementPopoverComponent, MiPopoverComponent, MiPopoverTriggerDirective],
})
export class LocalMiElementPopoverModule {}
