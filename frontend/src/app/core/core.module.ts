import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAtopComponent } from './components/nav-bar-atop/nav-bar-atop.component';
import { CategoryNavBarComponent } from './components/category-nav-bar/category-nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';



@NgModule({
  declarations: [
    NavBarAtopComponent,
    CategoryNavBarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  exports: [
    NavBarAtopComponent,
    CategoryNavBarComponent,
    SearchComponent
  ]
})
export class CoreModule { }
