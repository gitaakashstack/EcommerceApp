import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { filter, tap } from 'rxjs';
import { SearchDataTransferService } from '../../services/search-data-transfer.service';

@Component({
  selector: 'app-nav-bar-atop',
  templateUrl: './nav-bar-atop.component.html',
  styleUrls: ['./nav-bar-atop.component.scss']
})
export class NavBarAtopComponent implements OnInit {

  searchValue!: string;
  totalCartItems!: number;
  inSearchRoute: boolean = false

  constructor(private searchDTService: SearchDataTransferService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.searchDTService.isInSearchPage$.subscribe(isInSearchPageVal => {
      this.inSearchRoute = isInSearchPageVal
      if (!this.inSearchRoute)
        this.searchValue = '';
    })

    this.cartService.cartObs.subscribe({
      next: cartData => this.getTotalCartItems(cartData)
    })
  }

  private getTotalCartItems(cartData: any) {
    console.log(cartData)
    this.totalCartItems = cartData.reduce((totalItems: number, item: any) => {
      totalItems += item.quantityInCart;
      return totalItems;
    }, 0)
  }

  onSearch(searchVal: string) {
    this.searchDTService.sendSearchString(searchVal);
  }

}