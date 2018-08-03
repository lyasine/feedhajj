import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {StoresService} from "../../services/stores.service";

@Component({
  selector: 'stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private service : StoresService) { }

  storeList : Observable<any>;

  ngOnInit() {
    this.storeList =  this.service.getStores();
  }

}
