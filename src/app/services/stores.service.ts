import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/internal/operators";
import {Store} from "../models/store";

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http:Http, private  db : AngularFirestore) { }


  storeCollection = this.db.collection('stores');

  baseUrl :string  = "https://feedhajj.firebaseio.com";
  url : string = "/stores.json";

  getStores(){


    return this.storeCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Store;

          const id = a.payload.doc.id;
          return {id, ...data};
        }))
    );

  }


  createStore(store : any){

    return this.storeCollection.add(store);
  }

  updateStore(store : any){

    return this.storeCollection.doc(store.id).update(store);

  }

  getStore(id) {
    return  this.storeCollection.doc(id).ref.get().then(function(doc) {
      return doc.data();

    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  deleteStore(id){
    return this.storeCollection.doc(id).delete();
  }

}
