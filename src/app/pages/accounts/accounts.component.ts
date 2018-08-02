import {Component, OnInit,  Injectable} from '@angular/core';
import {Account} from "../../models/account";
import {AccountService} from "../../services/accountservice.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers : [ Account ]
})

export class AccountsComponent implements OnInit {

  accountList : Observable<any>;

  constructor( private service : AccountService) { }

  ngOnInit() {
     this.accountList =  this.service.getAccounts();
  }

}
