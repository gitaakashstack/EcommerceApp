import { Component, OnInit } from '@angular/core';
import { sortOrder } from './sort.model';

@Component({
  selector: 'app-sort-prods',
  templateUrl: './sort-prods.component.html',
  styleUrls: ['./sort-prods.component.scss']
})
export class SortProdsComponent implements OnInit {
  
  sortOptions=[
    {
      name:'Name',
      order: sortOrder.asc
    },
    {
      name:'Price: High to Low',
      order:sortOrder.desc
    },
    {
      name:'Price: Low to High',
      order:sortOrder.asc
    }
  ]
  //sortBy=['Name', , 'Price: Low to High'];
  currentSort=this.sortOptions[0];
  showSortOptions=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOptions(showSortOptions:boolean){
    this.showSortOptions=showSortOptions;
  }

}
