import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './category-nav-bar.component.html',
  styleUrls: ['./category-nav-bar.component.scss']
})
export class CategoryNavBarComponent implements OnInit {

  categories: any = [];
  constructor(private router: Router, private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getCategoriesAndSubCategories()
      .subscribe(responseData => this.categories = responseData)
  }

  loadChips() {
  }

}
