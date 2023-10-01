import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotManagementComponent } from './slot-management.component';


const routes: Routes = [
  { path: '', component: SlotManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotManagementRoutingModule { }
