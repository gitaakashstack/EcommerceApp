import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EatablesModule } from './eatables/eatables.module';
import { SearchComponent } from './core/components/search/search.component';
import { CartComponent } from './checkout/components/cart/cart.component';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', loadChildren: () => import('./eatables/eatables.module').then(m => m.EatablesModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) }
  // {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
