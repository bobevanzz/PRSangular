import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestLineitemService } from '@services/purchaseRequestLineitem.service';
import { PurchaseRequestLineitem } from '@models/purchaseRequestLineitem';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

  pagetitle: string = "PurchaseRequestLineitem Create";
  purchaseRequestId: number;
  purchaseRequestLineitem: PurchaseRequestLineitem = new PurchaseRequestLineitem(0, 0, 0, 1);
  products: Product[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestLineitemSvc: PurchaseRequestLineitemService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
  // This one uses Product instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.purchaseRequestLineitem.PurchaseRequestId = this.purchaseRequestId;
    console.log(this.purchaseRequestLineitem);
    this.PurchaseRequestLineitemSvc.Create(this.purchaseRequestLineitem)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaseRequests/lines/"+this.purchaseRequestId);
      });
  }

  getProductsList(): void {
    this.ProductSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", this.products);
      });    
  }

  ngOnInit() { 
    this.route.params
      .subscribe(parm => {
        this.purchaseRequestId = +parm["id"];
        this.getProductsList();
      });
  }

}
