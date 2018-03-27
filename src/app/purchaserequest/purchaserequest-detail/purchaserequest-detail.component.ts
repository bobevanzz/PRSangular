import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  pagetitle: string = "Purchase Request Detail";
  purchaserequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

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
        console.log("PurchaseRequest:", purchaserequest);
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
