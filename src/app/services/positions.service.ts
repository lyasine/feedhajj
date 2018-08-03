import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/internal/operators";
import {Position} from "../models/position";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http:Http, private  db : AngularFirestore) { }


  positionCollection = this.db.collection('positions');

  baseUrl :string  = "https://feedhajj.firebaseio.com";
  url : string = "/positions.json";

  getPositions(){

    return this.positionCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Position;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
    );

  }


  createPosition(store : any){

    return this.positionCollection.add(store);
  }

  updatePosition(store : any){

    return this.positionCollection.doc(store.id).update(store);

  }

  getPosition(id) {
    return  this.positionCollection.doc(id).ref.get().then(function(doc) {
      return doc.data();

    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  deletePosition(id){
    return this.positionCollection.doc(id).delete();
  }
}
