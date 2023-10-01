import { Injectable } from '@angular/core';
import { CheckoutOptions } from '../checkout-options.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutOptionService {
  private currentOptionSubj = new BehaviorSubject<CheckoutOptions | null>(CheckoutOptions.LOGIN);

  constructor() { }

  get currentOption$() {
    return this.currentOptionSubj.asObservable();
  }

  set currentOption(curOpt: CheckoutOptions) {
    this.currentOptionSubj.next(curOpt);
  }
}
