import {Component, OnInit, OnDestroy} from '@angular/core';
import {PositionsService} from "../../../services/positions.service";
import {Position} from "../../../models/position";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'healthmapedit',
  templateUrl: './healthmapedit.component.html',
  styleUrls: ['./healthmapedit.component.css']
})
export class HealthmapeditComponent implements OnInit {

  constructor(private  service : PositionsService,private router : Router,) { }
  position : any = {};
  ngOnInit() {
    // this.sub = this.activatedRoute.params.subscribe(params => {
    //
    //   if(params['id']){
    //     this.service.getPosition(params['id']).then(res=>{
    //       this.account = res as Position ;
    //       this.account.id = params['id'];
    //     });
    //   }
    // })
  }

  onSave(){
    this.service.createPosition(this.position).then(response => {
      this.router.navigate(['/healthmap']);
    });;
  }



}
