import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart, ICart } from '../cart/cart.model';

@Component({
  selector: 'app-cart-cost',
  templateUrl: './cart-cost.component.html',
  styleUrls: ['./cart-cost.component.scss']
})
export class CartCostComponent implements OnInit {
  totalPrice: number = 0;
  totalItems: number = 0;
  totalDiscount: number = 16;
  netPrice: number = 0;
  deliveryFee: number = 50;
  cartData !: ICart[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartObs
      .subscribe(cartData => {
        console.log(cartData);
        this.cartData = cartData;
        [this.totalItems, this.totalPrice] = cartData.reduce(([initQuant, initPrice], cartItem) => {
          return [cartItem.quantityInCart + initQuant, cartItem.unitPrice * cartItem.quantityPerUnit * cartItem.quantityInCart + initPrice];
        }, [0, 0]);

        this.netPrice = this.totalPrice - this.totalDiscount + this.deliveryFee
      })
  }

}
