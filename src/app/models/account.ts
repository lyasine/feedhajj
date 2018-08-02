import {container} from "@angular/core/src/render3/instructions";
import {and} from "@angular/router/src/utils/collection";
import {Injectable} from "@angular/core";
/**
 * Created by Yasine on 8/1/2018.
 */

@Injectable()
export class Account{

    constructor(){

    }
    id : string;
    firstname :string ;
    lastname : string;
    gender: string;
    nationality: string;
    language : string;
    balance : number;
    blood : string;
    age : number;
    cardiosick : boolean;
    surgery : boolean;
    bloodpressure : boolean;
    sugar : boolean;
    epileptic : boolean;
    allergic : boolean;
    allgergy : string;
    risklevel : number;



}