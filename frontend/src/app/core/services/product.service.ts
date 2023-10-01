import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IExtendedProductResponse, IExtendedProductVariant, IProductResponse } from '../../shared/models/eatables.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly origin = 'http://localhost:4000';

  //TODO Add showAddBtn using map operator in pipe while fetching the inventory data
  private productSubj = new BehaviorSubject<IExtendedProductResponse>({});

  constructor(private http: HttpClient, private router: Router) { }

  get productObs(): Observable<IExtendedProductResponse> {
    return this.productSubj.asObservable();
  }

  getProducts(category: string = '', search?: string) {
    //TODO implement catching of error
    const url = this.origin + '/products' + '/' + category;
    return this.http.get<IProductResponse>(url, {
      params: {
        search: search || ''
      }
    })
      .pipe
      (
        map((data) => this.modifyProductResponse(data)),
        tap(responseData => this.productSubj.next(responseData))
      )
  }

  emptyProducts() {
    // this.productSubj.next([]);
  }

  private modifyProductResponse(products: IProductResponse): IExtendedProductResponse {

    Object.values(products).forEach(prod => {
      (prod as IExtendedProductVariant[]).map(variant => {
        variant.showAddBtn = true;
        variant.quantityInCart = 0;
        return variant;
      })
    })

    return products as IExtendedProductResponse;
  }
}
