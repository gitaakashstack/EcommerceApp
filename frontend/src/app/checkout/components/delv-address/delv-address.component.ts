import { Component, OnInit } from '@angular/core';
import { DelvAddress } from '../../model/address.model';
import { BgClass } from '../../model/style-constants.model';
import { CheckoutOptionService } from '../../services/checkout-option.service';
import { CheckoutOptions } from '../../checkout-options.model';

@Component({
  selector: 'app-delv-address',
  templateUrl: './delv-address.component.html',
  styleUrls: ['./delv-address.component.scss']
})
export class DelvAddressComponent implements OnInit {

  readonly optionName = 'delivery address';
  isThisCheckoutOptActive: boolean = false;
  selectedAddId !: string;
  showChangeBtn: boolean = this.isThisCheckoutOptActive && !!this.selectedAddId;
  delvAddresses: DelvAddress[] = [
    {
      id: '1',
      name: 'Aakash Pandey',
      mobile: '9199949711',
      zipcode: '823001',
      house: 'Aakash Sadan',
      address: 'PNB Colony, MUstafabad',
      city: 'Gaya',
      state: 'Bihar',
      landmark: 'Near LIC Chandauti'
    },
    {
      id: '2',
      name: 'Aakash Pandey',
      mobile: '9199949711',
      zipcode: '400708',
      house: '401, Madhuri CHS',
      address: 'Sector 6, Airoli',
      city: 'Navi Mumbai',
      state: 'Maharashtra',

    }
  ]
  bgClass: BgClass = BgClass.default_white;
  viewAddressForm: boolean = false;

  constructor(private chkoutOptService: CheckoutOptionService) { }

  ngOnInit(): void {
    this.chkoutOptService.currentOption$
      .subscribe(val => {
        if (val === CheckoutOptions.DELV_ADDRESS) {
          this.bgClass = BgClass.blue;
          this.isThisCheckoutOptActive = true;
        }
        else {
          this.bgClass = BgClass.default_white
          this.isThisCheckoutOptActive = false;
        }
      })
  }

  clickHandler(selectedAddress: DelvAddress) {
    this.chkoutOptService.currentOption = CheckoutOptions.DELV_SLOT;
    this.bgClass = BgClass.default_white;
    this.showChangeBtn = true;
  }

  showAddressForm() {
    this.viewAddressForm = true;
  }

}
