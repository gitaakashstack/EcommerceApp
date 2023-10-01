import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { EatablesComponent } from "./eatables.component";

const routes: Routes = [
    {
        path: '',
        component: EatablesComponent,
        children: [
            { path: ':category', component: ProductComponent },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EatablesRoutingModule { }