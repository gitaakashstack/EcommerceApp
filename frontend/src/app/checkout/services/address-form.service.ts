import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressFormService {
  private readonly origin = 'http://localhost:4000';

  constructor(private http: HttpClient,) { }

  saveAddress() {
    // this.http.post(this.origin + '')

  }
}
