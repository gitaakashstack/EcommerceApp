import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.user$.subscribe({
      next: userData => {
        this.isLoggedIn = !!userData
        if (userData)
          this.userName = userData.name
      }
    });
  }

}
