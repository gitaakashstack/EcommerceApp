import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutOptionService } from '../../services/checkout-option.service';
import { CheckoutOptions } from '../../checkout-options.model';
import { BgClass } from '../../model/style-constants.model';

@Component({
  selector: 'app-confirm-log-in',
  templateUrl: './confirm-log-in.component.html',
  styleUrls: ['./confirm-log-in.component.scss']
})
export class ConfirmLogInComponent implements OnInit {

  isLoggedIn = false;
  optionName = 'login';
  isThisCheckoutOptActive: boolean = false;
  bgClass: BgClass = BgClass.default_white;
  showChangeBtn: boolean = this.isThisCheckoutOptActive && this.isLoggedIn;

  constructor(public chkoutOptService: CheckoutOptionService) { }

  ngOnInit(): void {
    this.chkoutOptService.currentOption$
      .subscribe(val => {
        if (val === CheckoutOptions.LOGIN) {
          this.bgClass = BgClass.blue
          this.isThisCheckoutOptActive = true;
        }
        else {
          this.bgClass = BgClass.default_white
          this.isThisCheckoutOptActive = false;
        }
      });
  }

  clickHandler() {
    this.chkoutOptService.currentOption = CheckoutOptions.DELV_ADDRESS;
    this.showChangeBtn = true;
  }

}
