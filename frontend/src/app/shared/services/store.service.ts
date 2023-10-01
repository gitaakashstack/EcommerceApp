import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IExtendedProductVariant } from '../models/eatables.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private urlPrefix = 'http://localhost:4000';
  searchedProds: IExtendedProductVariant[] = [];
  searchedProdsSubj = new BehaviorSubject<IExtendedProductVariant[]>(this.searchedProds);

  constructor(private httpClient: HttpClient) { }

  get searchedProdObs() {
    return this.searchedProdsSubj.asObservable();
  }

  getCategoriesAndSubCategories() {
    return this.httpClient.get(this.urlPrefix + '/category', {
      headers: {
        skip: 'true'
      }
    })
  }

  getSearchedProducts(searchVal: string) {
    const params = new HttpParams();
    params.set('search', searchVal);

    return this.httpClient.get<IExtendedProductVariant[]>(this.urlPrefix, {
      params
    })
      .pipe(
        tap(prodData => this.searchedProdsSubj.next(prodData))
      )
  }
}
