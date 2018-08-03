import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../../services/donation.service";
import {Subscription, Observable} from "rxjs";
import {StoresService} from "../../../services/stores.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Donation, DonationItem} from "../../../models/donation";

@Component({
  selector: 'donationedit',
  templateUrl: './donation-edit.component.html',
  styleUrls: ['./donation-edit.component.css']
})
export class DonationEditComponent implements OnInit {

  donation: any = {};
  donationitem : DonationItem = new DonationItem();
  donationItems : Observable<DonationItem>;
  private sub: Subscription;

  constructor(private service: DonationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.donation = new Donation();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {

      if (params['id']) {
        this.service.getDonation(params['id']).then(res => {
          this.donation = res as Donation;
          this.donation.id = params['id'];
        });
      }
    })
  }

  addItem(){
    this.donationitem.amount = this.donationitem.quantity * this.donationitem.price;

  }


  onSave() {

    if (!this.donation.id) {

      this.service.createDonation(this.donation).then(response => {
        this.router.navigate(['/donations']);
      });
    }
    else {
      debugger;
      this.service.updateDonation(this.donation).then(response => {
        this.router.navigate(['/donations']);
      });
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
