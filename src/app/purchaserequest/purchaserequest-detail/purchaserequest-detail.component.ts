import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '@services/purchaserequest.service';
import { PurchaseRequest } from '@models/purchaserequest';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Detail";
  purchaserequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router, 
    private sys: SystemService,
    private route: ActivatedRoute
  ) { }

  review(): void {
    this.purchaserequest.Status = (this.purchaserequest.Total <= 50) ? "APPROVED" : "REVIEW";
    this.PurchaseRequestSvc.Change(this.purchaserequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/list");
      });
  }

  verify(): void {
    this.isHidden = false;
  }
  remove(): void {
    this.PurchaseRequestSvc.Remove(this.purchaserequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/list");
      });
  }

  getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id)
      .subscribe(purchaserequest => {
        this.purchaserequest = purchaserequest;
        console.log("Purchaserequest:", purchaserequest);
      });
  }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getPurchaseRequestById(id);
      });

  }
}
