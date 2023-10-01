import { Component, OnInit, Input, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { IExtendedProductVariant } from '../../models/eatables.model';

@Component({
  selector: 'app-prod-quant-btn',
  templateUrl: './prod-quant-btn.component.html',
  styleUrls: ['./prod-quant-btn.component.scss']
})
export class ProdQuantBtnComponent implements OnInit {

  @ContentChildren('quant') showQuantity !: QueryList<ElementRef>;
  @Input() chipsData: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addUnitProduct(prod: IExtendedProductVariant): void {
    this.cartService.addToCart(prod);
    //event.target.previousElementSibling.innerText = +event.target.previousElementSibling.innerText + 1;
    // const currElem = this.showQuantity.find(elem => elem.nativeElement.id === prod.id);
    // currElem!.nativeElement.innerText = +currElem!.nativeElement.innerText + 1

  }

  subtractUnitProduct(prod: IExtendedProductVariant): void {
    this.cartService.removeFromCart(prod);
    //event.target.nextElementSibling.innerText = +event.target.nextElementSibling.innerText - 1;
    // const currElem = this.showQuantity.find(elem => elem.nativeElement.id === prod.id);
    // currElem!.nativeElement.innerText = +currElem!.nativeElement.innerText - 1
    // if (currElem!.nativeElement.innerText == 0) {
    //   prod.showAddBtn = true;
    // }
    // console.log(prod)
  }

}
