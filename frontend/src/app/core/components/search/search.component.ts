import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { IExtendedProductVariant } from '../../../shared/models/eatables.model';
import { SearchDataTransferService } from '../../services/search-data-transfer.service';
import { ProductService } from '../../services/product.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchedProds: IExtendedProductVariant[] = [];// [{
  //   id: 1,
  //   title: 'Lays',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 10,
  //   price: 10,
  //   description: 'Packet of chips more than half filled with air...trying to fool consumers',
  // },
  // {
  //   id: 2,
  //   title: 'Kurkure',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 20,
  //   price: 10,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // },
  // {
  //   id: 3,
  //   title: 'Hot Chips',
  //   category: 'snacks',
  //   subcategory: 'chips',
  //   weight: 50,
  //   quantity: 50,
  //   price: 20,
  //   description: 'Packet of chips',
  // }];
  gridColumnCount: number = 4;
  isSearchBarEmpty: boolean = true;
  isSearchResultEmpty: boolean = false;
  debounceTimer!: ReturnType<typeof setTimeout>;
  isLoading$!: Observable<boolean>


  constructor(private cartService: CartService, private productService: ProductService, private searchDTService: SearchDataTransferService, private loadinService: LoadingService) {
  }

  ngOnInit(): void {

    this.searchDTService.toggleIsInSearchPage = true;
    this.isLoading$ = this.loadinService.loadingState$;
    // this.isLoading$.subscribe(() => console.log(this.searchedProds))
    this.searchDTService.searchStr$.subscribe(searchVal => {
      this.isSearchBarEmpty = searchVal.length === 0;

      //* setting the loading state to true whenever we start typing 
      this.loadinService.setLoadingState = true;

      //* setting searchedProducts to empty everytime we type
      this.searchedProds = [];
      console.log('vv')
      clearTimeout(this.debounceTimer);

      //* If search bar is empty we don't need to send the http request
      if (this.isSearchBarEmpty) {
        this.loadinService.setLoadingState = false;
        return;
      }

      this.debounceTimer = setTimeout(() => {
        this.productService.getProducts(undefined, searchVal)
          .subscribe({
            next: (searchedProdsData) => {
              this.loadinService.setLoadingState = false;
              // this.isSearchResultEmpty = searchedProdsData.length === 0;
              // this.searchedProds = searchedProdsData
              console.log(this.searchedProds)
            },
            error: (err) => {
            }
          })
      }, 500);

    })

  }

  ngOnDestroy(): void {
    this.searchDTService.toggleIsInSearchPage = false;
  }

  getGridStyle() {
    return {
      'display': 'grid',
      'grid-template-columns': `repeat(${this.gridColumnCount},1fr)`
    }
  }

  getGridColumnSpanStyle() {
    return {
      'grid-column': `1/${this.gridColumnCount + 1}`
    };
  }

  isNotLastRow(indx: number) {
    return (indx + 1) % this.gridColumnCount === 0 && (this.searchedProds.length > indx + 1)
  }

  showAddBtnHandler(chips: any): void {
    this.cartService.addToCart(chips);
    if (chips.showAddBtn)
      chips.showAddBtn = false;
    console.log(chips)
  }

}
