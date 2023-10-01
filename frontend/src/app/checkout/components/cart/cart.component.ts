import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, delay, switchMap, tap } from 'rxjs';
import { Cart, ICart } from './cart.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  httpOrigin = 'http://localhost:4000';
  pincode: string = "";
  cartData !: ICart[];
  totalPrice: number = 0;
  totalItems: number = 0;
  totalDiscount: number = 16;
  netPrice: number = 0;
  deliveryFee: number = 50;
  dummyCart = [
    {
      productId: 1,
      name: 'Kurkure',
      price: 20,
      weight: 100,
      quantity: 2
    },
    {
      productId: 2,
      name: 'Bingo',
      price: 20,
      weight: 100,
      quantity: 4
    },
    {
      productId: 2,
      name: 'Bingo',
      price: 20,
      weight: 100,
      quantity: 4
    }
  ]
  constructor(private http: HttpClient, private cartService: CartService) {
  }
  //TODO the addBtn should look bigger in cart
  ngOnInit(): void {
    this.cartService.cartObs
      .subscribe(cartData => {
        console.log(cartData);
        this.cartData = cartData;
        [this.totalItems, this.totalPrice] = cartData.reduce(([initQuant, initPrice], cartItem) => {
          return [cartItem.quantityInCart + initQuant, cartItem.unitPrice * cartItem.quantityInCart + initPrice];
        }, [0, 0]);

        this.netPrice = this.totalPrice - this.totalDiscount + this.deliveryFee
      })
  }

}
