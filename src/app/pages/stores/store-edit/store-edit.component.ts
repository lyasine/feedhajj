import {Component, OnInit, OnDestroy} from '@angular/core';
import {StoresService} from "../../../services/stores.service";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {Store} from "../../../models/store";
import {Account} from "../../../models/account";

@Component({
    selector: 'newstore',
    templateUrl: './store-edit.component.html',
    styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit, OnDestroy {

    store: any = {};
    private sub: Subscription;

    constructor(private service: StoresService, private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {

            if (params['id']) {
                this.service.getStore(params['id']).then(res => {
                    this.store = res as Store;
                    this.store.id = params['id'];
                });
            }
        })
    }


    onSave() {

        if (!this.store.id) {
            debugger;
            this.service.createStore(this.store).then(response => {
                this.router.navigate(['/stores']);
            });
        }
        else {
            debugger;
            this.service.updateStore(this.store).then(response => {
                this.router.navigate(['/stores']);
            });
        }
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

}
