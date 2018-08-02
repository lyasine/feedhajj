import { Component, OnInit } from '@angular/core';
import {StoresService} from "../../../services/stores.service";

@Component({
  selector: 'newstore',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {

  constructor(private service : StoresService) { }

  ngOnInit() {

  }

}
