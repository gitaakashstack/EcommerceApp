import { Component, OnInit } from '@angular/core';
import { BgClass } from '../../model/style-constants.model';
import { Router } from '@angular/router';
import { CheckoutOptionService } from '../../services/checkout-option.service';
import { CheckoutOptions } from '../../checkout-options.model';

@Component({
  selector: 'app-delv-slot',
  templateUrl: './delv-slot.component.html',
  styleUrls: ['./delv-slot.component.scss']
})
export class DelvSlotComponent implements OnInit {

  optionName = 'delivery slot';
  bgClass: BgClass = BgClass.default_white;
  isThisCheckoutOptActive: boolean = false;
  selectedAddId!: string;
  showChangeBtn: boolean = this.isThisCheckoutOptActive && !!this.selectedAddId;


  constructor(private chkoutOptService: CheckoutOptionService) {
    this.chkoutOptService.currentOption$
      .subscribe(val => {
        if (val === CheckoutOptions.DELV_SLOT) {
          this.bgClass = BgClass.blue;
          this.isThisCheckoutOptActive = true;
        }
        else {
          this.bgClass = BgClass.default_white
          this.isThisCheckoutOptActive = false;
        }
      })
  }

  ngOnInit(): void {
  }

  navigateToSlot() {
    window.open('/checkout/slot', '_blank');
  }

}
