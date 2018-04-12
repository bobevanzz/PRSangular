import { Component, OnInit } from '@angular/core';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-purchase-request-lineitem-list',
  templateUrl: './purchase-request-lineitem-list.component.html',
  styleUrls: ['./purchase-request-lineitem-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
  }

}
