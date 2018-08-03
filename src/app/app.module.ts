import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing  } from "./app.router";
import { AccountsComponent } from './pages/accounts/accounts.component';
import { StoresComponent } from './pages/stores/stores.component';
import {MainMenuComponent} from "./menu.component";
import {AccountService} from "./services/accountservice.service";
import {StoresService} from "./services/stores.service";
import { RegisterComponent } from './pages/accounts/register/register.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {StoreEditComponent} from "./pages/stores/store-edit/store-edit.component";
import { HealthmapComponent } from './pages/healthmap/healthmap.component';
import { HealthmapeditComponent } from './pages/healthmap/healthmapedit/healthmapedit.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { DonationEditComponent } from './pages/donations/donation-edit/donation-edit.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    StoresComponent,
      MainMenuComponent,
      RegisterComponent,
      StoreEditComponent,
      HealthmapComponent,
      HealthmapeditComponent,
      DonationsComponent,
      DonationEditComponent,
      LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule
  ],
  providers: [AccountService,StoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
