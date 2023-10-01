import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-prods',
  templateUrl: './filter-prods.component.html',
  styleUrls: ['./filter-prods.component.scss']
})
export class FilterProdsComponent implements OnInit {

  //TODO Filter can vary based on the product: Eatables, Stationary, Furniture
  filterOptions=[
    {
      title:'Price',
    },
    {
      title:'Category'
    },
    {
      title:'Brand'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
