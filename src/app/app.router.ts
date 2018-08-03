/**
 * Created by Yasine on 8/1/2018.
 */

import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from "./pages/accounts/accounts.component";
import {StoresComponent} from "./pages/stores/stores.component";
import {RegisterComponent} from "./pages/accounts/register/register.component";
import {StoreEditComponent} from "./pages/stores/store-edit/store-edit.component";
import {HealthmapComponent} from "./pages/healthmap/healthmap.component";
import {HealthmapeditComponent} from "./pages/healthmap/healthmapedit/healthmapedit.component";
import {DonationsComponent} from "./pages/donations/donations.component";
import {DonationEditComponent} from "./pages/donations/donation-edit/donation-edit.component";
import {LoginComponent} from "./pages/login/login.component";


export const routing = RouterModule.forRoot([

    { path: 'accounts', component: AccountsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'editaccount/:id', component: RegisterComponent },
    { path: 'newstore', component: StoreEditComponent },
    { path: 'storeedit/:id', component: StoreEditComponent },
    { path: 'healthmap', component: HealthmapComponent },
    { path: 'healthmapedit', component: HealthmapeditComponent },
    { path: 'donations', component: DonationsComponent },
    { path: 'donationedit', component: DonationEditComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'donationedit/:id', component: DonationEditComponent },

    { path:'', redirectTo:'/accounts', pathMatch:"full" }

]);