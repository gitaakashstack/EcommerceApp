import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eatables',
  templateUrl: './eatables.component.html',
  styleUrls: ['./eatables.component.scss']
})
export class EatablesComponent implements OnInit {

  constructor() { 
    console.log('Eatables module loaded');
  }

  ngOnInit(): void {
  }


}
