import {Component, OnInit, OnDestroy} from '@angular/core';
import {AccountService} from "../../../services/accountservice.service";
import {Account} from "../../../models/account";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [Account ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  account : Account = new Account();
  private sub: Subscription;
  constructor( private service: AccountService, private router : Router, private activatedRoute : ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {

      if(params['id']){
          this.service.getAccount(params['id']).then(res=>{
            this.account = res as Account ;
            this.account.id = params['id'];

          });


      }
    })
  }

  onSave(){
     //this.account.setRiskLevel();
    this.setRiskLevel(this.account);
    if(!this.account.id) {
      this.service.createAccount(this.account).then(response => {
        this.router.navigate(['/accounts']);
      });
    }
    else{

      this.service.updateAccount(this.account).then(response => {
        this.router.navigate(['/accounts']);
      });
    }

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  deleteAccount(){
    this.service.deleteAccount(this.account.id).then(res=>{
      this.router.navigate(['/accounts']);
    });
  }


  setRiskLevel(account){
    let counter = 0;
    if(account.cardiosick )
    {
      counter = counter +1;
    }
    if(account.surgery )
    {
      counter = counter +1;
    }
    if(account.bloodpressure )
    {
      counter = counter +1;
    }
    if(account.sugar )
    {
      counter = counter +1;
    }
    if(account.allergic )
    {
      counter = counter +1;
    }

    if(counter >= 2 && account.age >= 50){
      account.risklevel = 4;
    }else{
      if(account.age < 50){
        account.risklevel = 3;
      }
      else{
        if(account.cardiosick || account.bloodpressure){
          account.risklevel = 2;
        }else{
          if(account.sugar || account.epileptic)
          {
            account.risklevel = 1;
          }
        }
      }
    }

  }


}
