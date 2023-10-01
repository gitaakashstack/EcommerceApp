import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItems(key: string) {
    const items = localStorage.getItem(key);
    return items && JSON.parse(items);
  }

  storeItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  clearItems() {
    localStorage.clear();
  }



}
