import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {AngularFirestore} from "angularfire2/firestore";
import {Account} from "../models/account";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:Http, private  db : AngularFirestore) { }

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    accountCollection = this.db.collection('accounts');

  baseUrl :string  = "https://feedhajj.firebaseio.com";
  url : string = "/accounts.json";

  getAccounts(){


      return this.accountCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Account;

              const id = a.payload.doc.id;
              return {id, ...data};
          }))
      );

  }


    createAccount(account : any){
        //const json = JSON.stringify(account);
        //return this.http.post(this.baseUrl + this.url , json,this.options ).toPromise().then(response=>response.json());
        return this.accountCollection.add(account);
    }

    updateAccount(account : any){

      return this.accountCollection.doc(account.id).update(account);

    }

    getAccount(id) {
      return  this.accountCollection.doc(id).ref.get().then(function(doc) {
          return doc.data();
          // if (doc.exists) {
          //     console.log("Document data:", doc.data());
          // } else {
          //     console.log("No such document!");
          // }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }

    deleteAccount(id){
      return this.accountCollection.doc(id).delete();
    }

}
