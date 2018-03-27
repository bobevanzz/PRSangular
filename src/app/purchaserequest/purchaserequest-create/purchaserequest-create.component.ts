import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  pagetitle: string = "Purchase Request Create";
  purchaserequest: PurchaseRequest = new PurchaseRequest(0, 0, '', '', "", 'Each', '', "", true);
  users: User[];

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private router: Router
  ) { }

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
  // This one uses Vendor instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.PurchaseRequestSvc.Create(this.purchaserequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/list");
      });
  }

  ngOnInit() { 
    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log("Users", this.users);
      });
  }

}
