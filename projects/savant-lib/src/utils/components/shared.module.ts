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
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { MatTableModule } from '@angular/material/table';
import { ElementPopoverComponent } from './popover/element-popover.component';
import { PopoverComponent } from './popover/utils/popover';
import { PopoverTriggerDirective } from './popover/utils/popover-trigger';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PropertyListComponent } from './property-list/property-list.component';
import { SideActionsComponent } from './side-actions/side-actions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ObjectFilterComponent,
    LogFilterComponent,
    SpanSelectorComponent,
    AttributeListComponent,
    ElementPopoverComponent,
    PopoverComponent,
    PopoverTriggerDirective,
    PropertyListComponent,
    SideActionsComponent,
  ],
  exports: [
    ObjectFilterComponent,
    LogFilterComponent,
    ElementPopoverComponent,
    AttributeListComponent,
    PropertyListComponent,
    SideActionsComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class SharedModule { }
