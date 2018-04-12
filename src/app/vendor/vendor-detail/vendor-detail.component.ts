import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '@services/system.service';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pagetitle: string = "Vendor Detail";
  vendor: Vendor;
  isHidden: boolean = true;

  constructor(
    private VendorSvc: VendorService,
    private sys: SystemService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  verify(): void {
    this.isHidden = false;
  }
  remove(): void {
    this.VendorSvc.Remove(this.vendor)
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
