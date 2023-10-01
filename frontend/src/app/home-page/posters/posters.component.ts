import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {

  startIndx = 0;  //Index of the first image in the row of the images being displayed at a time
  range = 2;
  imgWidth = 500;
  widthPx = '500px';
  gapWidth = 20;
  gapPx = '20px'
  imgLinks = [
    "../../../assets/discount-images/statioanry.jpg",
    "../../../assets/discount-images/shower-gel.jpg",
    "../../../assets/discount-images/sanitray-pads.jpg",
    "../../../assets/discount-images/noodles.jpg",
    "../../../assets/discount-images/detergent.jpg"
  ]
  totalImages = this.imgLinks.length;
  @ViewChildren('item') imageList !: QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
  }

  slideLeft() {
    // const curImgLastIndx = this.curImgFirstIndx + this.range - 1;
    // this.curImgFirstIndx = this.curImgFirstIndx + this.range;
    let nxtImgFirstIndx = this.startIndx + this.range;

    this.imageList.forEach(img => {
      const translateXLength = nxtImgFirstIndx * (this.imgWidth + this.gapWidth);
      img.nativeElement.style.transform = `translateX(-${translateXLength}px)`
    });

    this.startIndx = nxtImgFirstIndx;

  }

  slideRight() {
    let prevImgIndx = this.startIndx - this.range;
    console.log(prevImgIndx);

    this.imageList.forEach(img => {
      const translateXLength = prevImgIndx * (this.imgWidth + this.gapWidth);
      img.nativeElement.style.transform = `translateX(-${translateXLength}px)`
    })

    this.startIndx = prevImgIndx;
  }
}
