import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import {PositionsService} from "../../services/positions.service";
import {Observable} from "rxjs";

@Component({
  selector: 'healthmap',
  templateUrl: './healthmap.component.html',
  styleUrls: ['./healthmap.component.css']
})
export class HealthmapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

    positionList : Observable<any>;

  constructor(private  service : PositionsService) { }



  getImageFromRiskLevel(riskLevel){
      let colors = {
          1: '//maps.google.com/mapfiles/ms/icons/green-dot.png',
          2: '//maps.google.com/mapfiles/ms/icons/yellow-dot.png',
          3: '//maps.google.com/mapfiles/ms/icons/orange-dot.png',
          4: '//maps.google.com/mapfiles/ms/icons/red-dot.png',
      }
     return colors[riskLevel];
  }

  ngOnInit() {

//{lat: 21.344714, lng: 39.989878},

      this.positionList = this.service.getPositions();

      var mapProp = {
          center: new google.maps.LatLng(21.345337, 39.989019),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      this.positionList.forEach(res=>{


          res.forEach(element=>{
              console.log(element);
              if(element.id) {
                  new google.maps.Marker({
                      position: {lat: parseFloat(element.lat), lng: parseFloat(element.long)},
                      map: map,
                      icon : this.getImageFromRiskLevel(parseInt(element.risklevel)),
                      title: element.firstname + ' ' + element.lastname
                  });
              }
          });

      });



  }

}
