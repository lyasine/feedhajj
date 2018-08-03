import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../services/donation.service";
import {Observable} from "rxjs";

@Component({
  selector: 'donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(private service : DonationService) { }



  donationList : Observable<any>;

  ngOnInit() {
    this.donationList =  this.service.getDonations();
  }

}
