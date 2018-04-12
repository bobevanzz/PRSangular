import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '@services/purchaseRequest.service';
import { PurchaseRequest } from '@models/purchaseRequest';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  pagetitle: string = "PurchaseRequest List";
  purchaseRequests: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.PurchaseRequestSvc.List()
      .subscribe(purchaseRequests => {
        console.log(purchaseRequests);
        this.purchaseRequests = purchaseRequests;
      });
  }

}
