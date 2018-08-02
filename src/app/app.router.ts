/**
 * Created by Yasine on 8/1/2018.
 */

import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from "./pages/accounts/accounts.component";
import {StoresComponent} from "./pages/stores/stores.component";
import {RegisterComponent} from "./pages/accounts/register/register.component";
import {StoreEditComponent} from "./pages/stores/store-edit/store-edit.component";


export const routing = RouterModule.forRoot([

    { path: 'accounts', component: AccountsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'editaccount/:id', component: RegisterComponent },
    { path: 'newstore', component: StoreEditComponent },
    { path: 'storeedit/:id', component: StoreEditComponent },
    { path:'', redirectTo:'/accounts', pathMatch:"full" }

]);