import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogContainerComponent } from './log-container/log-container.component';



@NgModule({
  declarations: [
    LogContainerComponent,
  ],
  exports: [
    LogContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class LogModule { }
