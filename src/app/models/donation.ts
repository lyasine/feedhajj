import {Observable} from "rxjs";
/**
 * Created by Yasine on 8/3/2018.
 */


export class Donation{
    constructor(){
        this.items = [];
    }

    name : string;
    storename : string ;
    date : string;
    items : Observable<DonationItem[]>;
    description : string;

}

export class DonationItem{

    name : string;
    quantity : number;
    price : number;
    amount : number;
}