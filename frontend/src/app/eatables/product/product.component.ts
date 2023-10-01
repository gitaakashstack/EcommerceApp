import { Component, OnInit, AfterViewInit, ContentChildren, ContentChild, OnDestroy } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { IExtendedProductResponse, IExtendedProductVariant, ISelectedProduct } from '../../shared/models/eatables.model';
import { EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { from, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit, OnDestroy {

  //*obtained from http get
  products !: IExtendedProductResponse;
  prodQuant: number = 1;
  selectedProduct: ISelectedProduct = {};
  cart: any = []; //? Could it be an observable/subject ?

  @ViewChildren('quant') quantityElems!: QueryList<ElementRef>
  constructor(private productService: ProductService, private cartService: CartService, private activatedRoute: ActivatedRoute) {
    console.log('In Chips component')
  }

  ngOnInit(): void {
    console.log(this.products);
    // this.productService.getProducts(<string>this.activatedRoute.snapshot.paramMap.get('category'))
    //   .subscribe({
    //     next: (responseData) => {
    //       this.products = responseData;
    //       //* Since we ensured that mapped item returns ExtInventoryModel, we don't need to typecast
    //       //* here otherwise we would have to typecast the responseData to ExtInventoryModel in next

    //       this.fillDefaultsInSelectedProduct(this.products)
    //     }
    //   })
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          return this.productService.getProducts(<string>params.get('category'))
        })
      )
      .subscribe({
        next: (responseData) => {
          this.products = responseData;
          //* Since we ensured that mapped item returns ExtInventoryModel, we don't need to typecast
          //* here otherwise we would have to typecast the responseData to ExtInventoryModel in next
          this.fillDefaultsInSelectedProduct(this.products);
          this.cartService.updateProductsFromCart(this.products);
        }
      }
      )
  }

  ngOnDestroy(): void {
    this.productService.emptyProducts();
  }

  ngAfterViewInit(): void {
    this.quantityElems.changes.subscribe(val => console.log(val));
  }

  showAddBtnHandler(prod: IExtendedProductVariant): void {
    this.cartService.addToCart(prod);
    if (prod.showAddBtn)
      prod.showAddBtn = false;
  }

  private fillDefaultsInSelectedProduct(products: IExtendedProductResponse) {
    Object.keys(products).forEach(productId => {
      this.selectedProduct[productId] = products[productId][0];
    })

    console.log(this.selectedProduct);

  }
}
