import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataTransferService {

  private searchStr = new Subject<string>();

  //* Tells whether the current page is /search or not
  private isInSearchRoute = new BehaviorSubject<boolean>(false);

  constructor() { }

  get searchStr$() {
    return this.searchStr.asObservable();
  }

  get isInSearchPage$() {
    return this.isInSearchRoute.asObservable();
  }

  set toggleIsInSearchPage(toggleVal: boolean) {
    this.isInSearchRoute.next(toggleVal);
  }

  sendSearchString(str: string) {
    this.searchStr.next(str);
  }

}
