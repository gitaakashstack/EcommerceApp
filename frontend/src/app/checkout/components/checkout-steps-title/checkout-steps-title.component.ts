import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BgClass } from '../../model/style-constants.model';

@Component({
  selector: 'app-checkout-steps-title',
  templateUrl: './checkout-steps-title.component.html',
  styleUrls: ['./checkout-steps-title.component.scss']
})
export class CheckoutStepsTitleComponent implements OnInit {
  @Input() optionIndex !: string;
  @Input() optionName !: string;
  @Input() bgClass !: BgClass;
  @Input() showChangeBtn !: boolean

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(): void {
  //   this.showChangeBtn = this.bgClass === BgClass.default_white
  // }

}
