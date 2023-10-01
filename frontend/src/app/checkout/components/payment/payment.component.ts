import { Component, OnInit } from '@angular/core';
import { BgClass } from '../../model/style-constants.model';
import { PaymentCategories, PaymentCategory, PaymentMerchants, } from '../../model/payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isLoggedIn = false;
  optionName = 'payment';
  isThisCheckoutOptActive: boolean = true;
  bgClass: BgClass = BgClass.default_white;
  showChangeBtn: boolean = this.isThisCheckoutOptActive && this.isLoggedIn;
  paymentOptions: PaymentCategory[] = [
    {
      name: PaymentCategories.wallet,
      suboption: [
        {
          name: PaymentMerchants.phonepe,
        },
        {
          name: PaymentMerchants.paytm
        }
      ]
    },
    {
      name: PaymentCategories.upi,
      suboption: [
        {
          name: PaymentMerchants.phonepe,
        },
        {
          name: PaymentMerchants.paytm
        },
        {
          name: PaymentMerchants.gpay
        }
      ]
    },
    {
      name: PaymentCategories.cards,
    },
    {
      name: PaymentCategories.net_banking,
    },
    {
      name: PaymentCategories.emi,
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
