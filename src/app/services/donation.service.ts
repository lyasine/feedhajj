import { Injectable } from '@angular/core';
import {Donation} from "../models/donation";
import {AngularFirestore} from "angularfire2/firestore";
import {Http} from "@angular/http";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http:Http, private  db : AngularFirestore) { }


  donationCollection = this.db.collection('donations');

  baseUrl :string  = "https://feedhajj.firebaseio.com";
  url : string = "/donations.json";

  getDonations(){

    return this.donationCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Donation;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
    );

  }


  createDonation(store : any){

    return this.donationCollection.add(store);
  }

  updateDonation(store : any){

    return this.donationCollection.doc(store.id).update(store);

  }

  getDonation(id) {
    return  this.donationCollection.doc(id).ref.get().then(function(doc) {
      return doc.data();

    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  deleteDonation(id){
    return this.donationCollection.doc(id).delete();
  }
}
