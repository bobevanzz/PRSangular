import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineitemService } from '@services/purchaseRequestLineitem.service';
import { PurchaseRequestLineitem } from '@models/purchaseRequestLineitem';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-lineitem-detail',
  templateUrl: './purchase-request-lineitem-detail.component.html',
  styleUrls: ['./purchase-request-lineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {

  pagetitle: string = "PurchaseRequestLineitem Detail";
  purchaseRequestId: number;
  purchaseRequestLineitem: PurchaseRequestLineitem;

  constructor(
    private sys: SystemService,
    private PurchaseRequestLineitemSvc: PurchaseRequestLineitemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    console.log(this.purchaseRequestLineitem);
    this.PurchaseRequestLineitemSvc.Remove(this.purchaseRequestLineitem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaseRequest/list/"+this.purchaseRequestId);
      });
  }

  getPurchaseRequestLineitemById(id) {
    this.PurchaseRequestLineitemSvc.Get(id)
      .subscribe(purchaseRequestLineitem => {
        this.purchaseRequestLineitem = purchaseRequestLineitem;
        console.log("PurchaseRequestLineitem:", purchaseRequestLineitem);
      });
  }  

  ngOnInit() {

    this.route.params
      .subscribe(parms => {
        this.purchaseRequestId = parms["prid"];
        let id = parms["id"];
        this.getPurchaseRequestLineitemById(id);
      });  
    }

}
