import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { SortProdsComponent } from './components/sort-prods/sort-prods.component';
import { PrimContentContainerComponent } from './components/prim-content-container/prim-content-container.component';
import { FilterProdsComponent } from './components/filter-prods/filter-prods.component';
import { FilterRectTemplateComponent } from './components/filter-rect-template/filter-rect-template.component';
import { ProdQuantBtnComponent } from './components/prod-quant-btn/prod-quant-btn.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavAccountComponent } from './components/nav-account/nav-account.component';
import { RouterModule } from '@angular/router';
import { ProductPipe } from './pipes/product.pipe';
import { FromObjectPipe } from './pipes/from-object.pipe';


@NgModule({
  declarations: [
    CardComponent,
    SortProdsComponent,
    PrimContentContainerComponent,
    FilterProdsComponent,
    FilterRectTemplateComponent,
    ProdQuantBtnComponent,
    LoadingSpinnerComponent,
    LogoComponent,
    NavAccountComponent,
    ProductPipe,
    FromObjectPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    SortProdsComponent,
    FilterProdsComponent,
    PrimContentContainerComponent,
    ProdQuantBtnComponent,
    LoadingSpinnerComponent,
    LogoComponent,
    NavAccountComponent,
    ProductPipe,
    FromObjectPipe,
    MatIconModule,
  ]
})
export class SharedModule { }
