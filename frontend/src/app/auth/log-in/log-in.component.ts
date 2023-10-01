import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, from, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup
  showHttpErr: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    console.log('in ngoninit');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    this.loginForm.statusChanges.subscribe(status => {
      if (status === 'VALID')
        this.showHttpErr = false
    })

  }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  //This is usually done in backend but here I am just emulating the async email validation which happens at the backend
  checkEmailExists(emailControl: AbstractControl): Observable<ValidationErrors | null> {
    return of({ emailExists: false }).pipe(debounceTime(500))
  }

  onLogIn(event: Event) {
    event.preventDefault();
    console.log(this.loginForm, this.loginForm.invalid)
    this.authService.loginUser(this.emailControl.value, this.passwordControl.value)
      .subscribe({
        next: () => this.router.navigate(['/']),
        error: err => {
          this.showHttpErr = true;
          return this.loginForm.setErrors({
            backendError: err.message
          })
        }
      })

  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }



}
