import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingStateSub = new BehaviorSubject<boolean>(false);

  constructor() { }

  get loadingState$() {
    return this.loadingStateSub.asObservable();
  }
  set setLoadingState(isLoading: boolean) {
    this.loadingStateSub.next(isLoading);

  }


}
