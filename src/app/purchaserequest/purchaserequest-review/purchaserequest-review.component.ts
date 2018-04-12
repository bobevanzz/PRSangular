import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '@services/PurchaseRequest.service';
import { PurchaseRequest } from '@models/purchaseRequest';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Review";
  purchaseRequests: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.PurchaseRequestSvc.ReviewList()
      .subscribe(purchaseRequests => {
        //console.log(purchaseRequests);
        this.purchaseRequests = purchaseRequests;
      });
  }

}
