import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  states = ['bihar', 'jharkhand', 'maharashtra', 'andhra pradesh'] as const;
  addrForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addrForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      zipcode: new FormControl('', [Validators.minLength(6), Validators.maxLength(6)]),
      house: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      state: new FormControl(''),
      landmark: new FormControl(''),
      alt_mobile: new FormControl('')
    })
  }

  get nameControl() {
    return this.addrForm.controls['name'];
  }



  submitHandler() {

  }

}
