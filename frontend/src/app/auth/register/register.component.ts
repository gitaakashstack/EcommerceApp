import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { locations, genders, User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders = Object.values(genders);
  locations = Object.values(locations);
  forbiddenNames = ['aakash', 'kaustav', 'yash'];
  regForm!: FormGroup; //** Registration Form

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl('', [Validators.required], this.checkInvalidNamesAsync.bind(this)),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      gender: new FormControl(null),
      location: new FormControl(null),
      favProds: new FormArray([]),
    })

    this.nameControl.valueChanges.pipe(tap(val => console.log('tapped ' + val))).subscribe(val => console.log(val));
  }

  get nameControl(): FormControl {
    return this.regForm.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.regForm.get('email') as FormControl;
  }

  get mobileControl(): FormControl {
    return this.regForm.get('mobile') as FormControl;
  }

  get favProdControl(): FormArray {
    return this.regForm.get('favProds') as FormArray;
  }

  get passwordControl(): FormControl {
    return this.regForm.get('password') as FormControl;
  }

  checkInvalidNames(control: FormControl) {
    console.log('validator');
    if (this.forbiddenNames.some(name =>
      name === control.value.toLowerCase()
    ))
      return { invalidName: true, value: control.value }
    else
      return null
  }

  checkInvalidNamesAsync(control: AbstractControl): Promise<ValidationErrors | null> {

    // * Using an Observable
    // if(this.forbiddenNames.some(name=>
    //       name===control.value.toLowerCase()
    //     )) 
    //       return of({ invalidName:true, value:control.value}); 
    //     else
    //       return of(null);

    // * Using a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenNames.some(name =>
          name === control.value.toLowerCase()
        ))
          return resolve({ invalidName: true, value: control.value });
        else
          return resolve(null)
      }, 1000)
    });
  }
  onAddFavProd() {
    // this.skillControl.push(new FormControl(null));
    this.favProdControl.push(new FormGroup({
      category: new FormControl('', [Validators.required]),
      name: new FormControl(null)
    }));
    console.log(this.favProdControl);
  }

  onDeleteFavProd(indx: number) {
    console.log(indx);
    this.favProdControl.removeAt(indx);
    console.log(this.favProdControl);
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    //console.log('in submit',this.regForm);
    this.authService.postUserData(this.regForm.value);
    //this.profileService.addUser(this.regForm.value);
    //this.router.navigate(['log-in']);
  }

}
