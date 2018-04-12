import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '@services/system.service';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pagetitle: string = "Vendor Change";
  vendor: Vendor;

  constructor(
    private VendorSvc: VendorService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  change(): void {
    this.VendorSvc.Change(this.vendor)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/vendors/list");
      });
  }

  getVendorById(id) {
    this.VendorSvc.Get(id)
      .subscribe(vendor => {
        this.vendor = vendor;
        console.log("Vendor:", vendor);
      });
  }  

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getVendorById(id);
      });  
  }

}
