import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { filter, tap } from 'rxjs'
import { LocalStorageService } from './shared/services/local-storage.service';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive_form_practice';

  constructor(private authService: AuthService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.authService.autoLogin();

    this.cartService.init();
  }
}