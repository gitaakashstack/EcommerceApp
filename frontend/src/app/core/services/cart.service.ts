import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IExtendedProductResponse, IExtendedProductVariant } from 'src/app/shared/models/eatables.model';
import { Cart, ICart } from '../../checkout/components/cart/cart.model';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private origin = 'http://localhost:4000';
  private cart: ICart[] = [];
  private cartSubj = new BehaviorSubject<ICart[]>(this.cart);
  private readonly CART_KEY = 'cart';
  timerId !: any;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  get cartObs() {
    return this.cartSubj.asObservable();
  }

  get cartData() {
    return this.cart.slice();
  }

  init() {
    let cartItems = this.localStorage.getItems(this.CART_KEY);
    cartItems ??= [];
    this.cart = cartItems;
    this.cartSubj.next(cartItems);
  }

  addToCart(prod: IExtendedProductVariant) {
    prod.quantityInCart += 1;
    console.log(prod.quantityInCart);
    let prodInCart = this.cart.find((_prodInCart: ICart) => _prodInCart.id === prod.id);

    if (!prodInCart) {
      prodInCart = prod //keeping same refernce of object in cart array and product array so that any change in either of them is reflect in the other 
      this.cart.push(prodInCart);
    }

    this.cartSubj.next(this.cart.slice()); //* passing a copy of carts array so that the subscribers cannot change the actual cart

    this.sendPostRequest(this.cartData)
    //* Should I send http request to cart everytime user add or subtracts product

    this.localStorage.storeItem(this.CART_KEY, this.cartData);
  }

  removeFromCart(prod: IExtendedProductVariant) {
    prod.quantityInCart -= 1;

    const prodInCartIndx = this.cart.findIndex((_prodInCart: ICart) => _prodInCart.id === prod.id);

    if (this.cart[prodInCartIndx].quantityInCart === 0)
      this.cart.splice(prodInCartIndx, 1);

    this.cartSubj.next(this.cart.slice());

    this.sendPostRequest(this.cartData);

    this.localStorage.storeItem(this.CART_KEY, this.cartData);
  }

  updateProductsFromCart(products: IExtendedProductResponse) {

    if (this.cart.length === 0)
      return;

    this.cart.forEach(cartProdVar => {
      const prod = products[cartProdVar.productId].find(prodVar => prodVar.id === cartProdVar.id);
      (prod as IExtendedProductVariant).quantityInCart = cartProdVar.quantityInCart;
    })

  }


  private sendPostRequest(reqBody: any) {
    clearTimeout(this.timerId);

    this.timerId = setTimeout(() => {
      this.http.post(this.origin + '/cart', reqBody).subscribe(() => console.log('Request Successful'))
    }, 500)

  }

}
