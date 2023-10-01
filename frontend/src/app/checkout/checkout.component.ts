import { Component, OnInit } from '@angular/core';
import { CheckoutOptions } from './checkout-options.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutOptions = ['login', 'delivery address', 'delivery slot', 'payment'] as const;
  currentOption !: CheckoutOptions;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      //if user is not logged in
      if (!user)
        this.currentOption = CheckoutOptions.LOGIN;
    })
  }


}
