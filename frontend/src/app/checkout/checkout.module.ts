import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ConfirmLogInComponent } from './components/confirm-log-in/confirm-log-in.component';
import { DelvAddressComponent } from './components/delv-address/delv-address.component';
import { CartComponent } from './components/cart/cart.component';
import { CartCostComponent } from './components/cart-cost/cart-cost.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutStepsTitleComponent } from './components/checkout-steps-title/checkout-steps-title.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DelvSlotComponent } from './components/delv-slot/delv-slot.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    ConfirmLogInComponent,
    DelvAddressComponent,
    CartComponent,
    CartCostComponent,
    CheckoutStepsTitleComponent,
    AddressFormComponent,
    DelvSlotComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
