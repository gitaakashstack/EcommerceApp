import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { IExtendedProductVariant } from 'src/app/shared/models/eatables.model';

@Pipe({
  name: 'getCartQuant'
})
export class ProductPipe implements PipeTransform {

  constructor(private cartService: CartService) { }

  transform(prodVariant: IExtendedProductVariant, ...args: unknown[]): IExtendedProductVariant {
    const prodInCart = this.cartService.cartData.find(prod => prod.id === prodVariant.id);

    if (prodInCart)
      prodVariant.quantityInCart = prodInCart.quantityInCart;
    console.log(prodVariant.quantityInCart)
    return prodVariant;
  }

}
