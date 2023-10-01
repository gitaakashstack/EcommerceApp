import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from "./profile/profile.component";
import { WalletComponent } from './wallet/wallet.component';

const routes: Route[] = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }