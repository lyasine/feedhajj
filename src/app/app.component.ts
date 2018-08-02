import { Component, OnInit } from '@angular/core';
import {AccountService} from "./services/accountservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ AccountService ]
})
export class AppComponent {

  constructor(private accountService: AccountService){}

  ngOnInit(){

  }
}
