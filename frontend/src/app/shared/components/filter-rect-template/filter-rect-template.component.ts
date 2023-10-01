import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-rect-template',
  templateUrl: './filter-rect-template.component.html',
  styleUrls: ['./filter-rect-template.component.scss']
})
export class FilterRectTemplateComponent implements OnInit {

  isDownArrowHead=true;
  @Output() onInvertArrowHead=new EventEmitter<boolean>();
  // @Input() toggleArrowHeadHandler !:(showOptions:boolean)=>void

  constructor() { }

  ngOnInit(): void {
  }

  invertArrowHead(){
    this.isDownArrowHead=!this.isDownArrowHead;
    this.onInvertArrowHead.emit(!this.isDownArrowHead)
  }
}



