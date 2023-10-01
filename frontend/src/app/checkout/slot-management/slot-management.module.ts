import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotManagementComponent } from './slot-management.component';
import { SlotListComponent } from './slot-list/slot-list.component';
import { SlotItemComponent } from './slot-item/slot-item.component';
import { SharedModule } from '../../shared/shared.module';
import { SlotManagementRoutingModule } from './slot-management-routing.module';



@NgModule({
  declarations: [
    SlotManagementComponent,
    SlotItemComponent,
    SlotListComponent
  ],
  imports: [
    CommonModule,
    SlotManagementRoutingModule,
    SharedModule
  ]
})
export class SlotManagementModule { }
