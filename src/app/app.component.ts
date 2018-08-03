import {Component, OnInit, AfterViewInit} from '@angular/core';

import {PositionsService} from "./services/positions.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

    constructor(private positionService: PositionsService) {
    }

    ngAfterViewInit() {
        window['feather'].replace();
    }

    ngOnInit() {

        // let positions = [
        //   {
        //     "firstname": "Malek",
        //     "lastname": "Saiid",
        //     "risklevel": 4,
        //     "lat": "21.352000",
        //     "long": "39.992603"
        //   },
        //   {
        //     "firstname": "Fahed",
        //     "lastname": "Hadi",
        //     "risklevel": 1,
        //     "lat": "21.352274",
        //     "long": "39.992103"
        //   },
        //   {
        //     "firstname": "Selma",
        //     "lastname": "Raouf",
        //     "risklevel": 2,
        //     "lat": "21.352444",
        //     "long": "39.991873"
        //   },
        //   {
        //     "firstname": "Sami",
        //     "lastname": "Hamid",
        //     "risklevel": 3,
        //     "lat": "21.352655",
        //     "long": "39.991530"
        //   },
        //   {
        //     "firstname": "Karim",
        //     "lastname": "Haris",
        //     "risklevel": 1,
        //     "lat": "21.352820",
        //     "long": "39.991240"
        //   },
        //   {
        //     "firstname": "Ahmed",
        //     "lastname": "Ali",
        //     "risklevel": 1,
        //     "lat": "21.353213",
        //     "long": "39.990616"
        //   },
        //   {
        //     "firstname": "Ridha",
        //     "lastname": "Raouf",
        //     "risklevel": 2,
        //     "lat": "21.353472",
        //     "long": "39.990180"
        //   },
        //   {
        //     "firstname": "Fadi",
        //     "lastname": "Ghanem",
        //     "risklevel": 2,
        //     "lat": "21.353770",
        //     "long": "39.989746"
        //   },
        //   {
        //     "firstname": "Djamel",
        //     "lastname": "Amer",
        //     "risklevel": 3,
        //     "lat": "21.354619",
        //     "long": "39.990025"
        //   },
        //   {
        //     "firstname": "Farid",
        //     "lastname": "Malek ",
        //     "risklevel": 3,
        //     "lat": "21.354983",
        //     "long": "39.989997"
        //   },
        //   {
        //     "firstname": "Zeyneb",
        //     "lastname": "Messoud",
        //     "risklevel": 4,
        //     "lat": "21.354892",
        //     "long": "39.990426"
        //   },
        //   {
        //     "firstname": "Meriem",
        //     "lastname": "Abderrahman",
        //     "risklevel": 4,
        //     "lat": "21.354444",
        //     "long": "39.991068"
        //   },
        //   {
        //     "firstname": "Mohamed",
        //     "lastname": "Rami",
        //     "risklevel": 2,
        //     "lat": "21.353873",
        //     "long": "39.991884"
        //   },
        //   {
        //     "firstname": "Kamel",
        //     "lastname": "Mohammed",
        //     "risklevel": 1,
        //     "lat": "21.353698",
        //     "long": "39.992314"
        //   },
        //   {
        //     "firstname": "Soumaya",
        //     "lastname": "Madjed",
        //     "risklevel": 4,
        //     "lat": "21.353396",
        //     "long": "39.992814"
        //   },
        //   {
        //     "firstname": "Zaher",
        //     "lastname": "Aymen",
        //     "risklevel": 3,
        //     "lat": "21.353083",
        //     "long": "39.993153"
        //   },
        //   {
        //     "firstname": "Rania",
        //     "lastname": "Hamid",
        //     "risklevel": 3,
        //     "lat": "21.353079",
        //     "long": "39.993340"
        //   },
        //   {
        //     "firstname": "Yassine",
        //     "lastname": "Fahed",
        //     "risklevel": 2,
        //     "lat": "21.352761",
        //     "long": "39.993634"
        //   },
        //   {
        //     "firstname": "Amjed",
        //     "lastname": "Fikri",
        //     "risklevel": 2,
        //     "lat": "21.352603",
        //     "long": "39.994016"
        //   },
        //   {
        //     "firstname": "Mohamed",
        //     "lastname": "Ayoub",
        //     "risklevel": 1,
        //     "lat": "21.352366",
        //     "long": "39.994437"
        //   },
        //   {
        //     "firstname": "Ismeil",
        //     "lastname": "Abdessamed",
        //     "risklevel": 2,
        //     "lat": "21.352031",
        //     "long": "39.994786"
        //   },
        //   {
        //     "firstname": "Mohsine",
        //     "lastname": "Malek ",
        //     "risklevel": 3,
        //     "lat": "21.351874",
        //     "long": "39.995113"
        //   },
        //   {
        //     "firstname": "Djawed",
        //     "lastname": "Houseine",
        //     "risklevel": 1,
        //     "lat": "21.351406",
        //     "long": "39.995697"
        //   },
        //   {
        //     "firstname": "Hani",
        //     "lastname": "Kamil",
        //     "risklevel": 4,
        //     "lat": "21.351616",
        //     "long": "39.995554"
        //   },
        //   {
        //     "firstname": "Tamir",
        //     "lastname": "Ramzi",
        //     "risklevel": 1,
        //     "lat": "21.352539",
        //     "long": "39.994668"
        //   },
        //   {
        //     "firstname": "Haweri",
        //     "lastname": "kaya",
        //     "risklevel": 3,
        //     "lat": "21.352763",
        //     "long": "39.994818"
        //   },
        //   {
        //     "firstname": "Anissa",
        //     "lastname": "Mahmoud",
        //     "risklevel": 2,
        //     "lat": "21.352986",
        //     "long": "39.994931"
        //   },
        //   {
        //     "firstname": "Mouhammed",
        //     "lastname": "Yahya",
        //     "risklevel": 4,
        //     "lat": "21.353210",
        //     "long": "39.994880"
        //   },
        //   {
        //     "firstname": "Djamil",
        //     "lastname": "Ali",
        //     "risklevel": 3,
        //     "lat": "21.353294",
        //     "long": "39.995149"
        //   },
        //   {
        //     "firstname": "Hassen",
        //     "lastname": "Mohsine",
        //     "risklevel": 2,
        //     "lat": "21.353531",
        //     "long": "39.995297"
        //   },
        //   {
        //     "firstname": "Kamil",
        //     "lastname": "Mouhammed",
        //     "risklevel": 2,
        //     "lat": "21.353371",
        //     "long": "39.994640"
        //   },
        //   {
        //     "firstname": "Kamar",
        //     "lastname": "Wahid",
        //     "risklevel": 3,
        //     "lat": "21.353504",
        //     "long": "39.994429"
        //   },
        //   {
        //     "firstname": "Haiethem",
        //     "lastname": "Chouayeb",
        //     "risklevel": 4,
        //     "lat": "21.353680",
        //     "long": "39.994105"
        //   },
        //   {
        //     "firstname": "Kadhim",
        //     "lastname": "Djad",
        //     "risklevel": 4,
        //     "lat": "21.353876",
        //     "long": "39.993804"
        //   },
        //   {
        //     "firstname": "Amine",
        //     "lastname": "hadji",
        //     "risklevel": 1,
        //     "lat": "21.354003",
        //     "long": "39.993547"
        //   },
        //   {
        //     "firstname": "Asmaa",
        //     "lastname": "Nouara",
        //     "risklevel": 3,
        //     "lat": "21.354044",
        //     "long": "39.993872"
        //   },
        //   {
        //     "firstname": "Nabila",
        //     "lastname": "Salem",
        //     "risklevel": 2,
        //     "lat": "21.354170",
        //     "long": "39.994038"
        //   },
        //   {
        //     "firstname": "Firyel",
        //     "lastname": "Dhahabi",
        //     "risklevel": 1,
        //     "lat": "21.354281",
        //     "long": "39.994210"
        //   },
        //   {
        //     "firstname": "Shahd",
        //     "lastname": "Mhamed",
        //     "risklevel": 4,
        //     "lat": "21.354392",
        //     "long": "39.994398"
        //   },
        //   {
        //     "firstname": "Ghada",
        //     "lastname": "Amer",
        //     "risklevel": 2,
        //     "lat": "21.354206",
        //     "long": "39.993262"
        //   }
        // ];
        //
        // positions.forEach(res=>{
        //   this.positionService.createPosition(res);
        // });


    }
}
