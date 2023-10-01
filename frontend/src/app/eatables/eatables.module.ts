import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EatablesComponent } from './eatables.component';
import { ProductComponent } from './product/product.component';
import { EatablesRoutingModule } from './eatables-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductPipe } from '../shared/pipes/product.pipe';




@NgModule({
  declarations: [
    EatablesComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    EatablesRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class EatablesModule { }
