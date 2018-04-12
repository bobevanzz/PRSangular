import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '@services/purchaseRequest.service';
import { PurchaseRequest } from '@models/purchaseRequest';
import { UserService } from '@services/user.service';
import { User } from '@models/user';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Change";
  purchaseRequest: PurchaseRequest;
  users: User[];

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
  // This one uses User instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
  change(): void {
    this.PurchaseRequestSvc.Change(this.purchaseRequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaseRequests/list");
      });
  }

  getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id)
      .subscribe(purchaseRequest => {
        this.purchaseRequest = purchaseRequest;
        console.log("PurchaseRequest:", purchaseRequest);
      });
  }  

  ngOnInit() {

    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log("Users", users);
      });

    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getPurchaseRequestById(id);
      });  
    }

}
