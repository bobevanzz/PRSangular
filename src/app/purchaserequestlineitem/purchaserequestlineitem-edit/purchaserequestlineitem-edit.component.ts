import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineitemService } from '@services/purchaseRequestLineitem.service';
import { PurchaseRequestLineitem } from '@models/purchaseRequestLineitem';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-lineitem-edit',
  templateUrl: './purchase-request-lineitem-edit.component.html',
  styleUrls: ['./purchase-request-lineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {

  pagetitle: string = "PurchaseRequestLineitem Change";
  purchaseRequestId: number;
  purchaseRequestLineitem: PurchaseRequestLineitem;
  products: Product[];
//
  
  getPurchaseRequestLineitemById(id) {
    this.PurchaseRequestLineitemSvc.Get(id)
      .subscribe(purchaseRequestLineitem => {
        this.purchaseRequestLineitem = purchaseRequestLineitem;
        console.log("PurchaseRequestLineitem:", purchaseRequestLineitem);
      });
  }  

  ngOnInit() {

    this.ProductSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", products);
      });

    this.route.params
      .subscribe(parms => {
        this.purchaseRequestId = parms["prid"];
        let id = parms["id"];
        this.getPurchaseRequestLineitemById(id);
      });  
    }

}
