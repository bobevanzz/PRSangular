import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@services/system.service';

import { PurchaseRequestLineitem } from '@models/purchaseRequestLineitem';

const url = "http://localhost:4200/PurchaseRequestLineitems/";

@Injectable()
export class PurchaseRequestLineitemService {

  constructor(private http: HttpClient, private sys: SystemService) { }

  List(): Observable<PurchaseRequestLineitem[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequestLineitem[]>;
  }
  Get(id): Observable<PurchaseRequestLineitem> {
    return this.http.get(url+"Get/"+id) as Observable<PurchaseRequestLineitem>;
  }
  Create(purchaserequestlineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Create", purchaserequestlineitem) as Observable<any>;
  }
  Change(purchaserequestlineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Change", purchaserequestlineitem) as Observable<any>;
  }
  Remove(purchaserequestlineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Remove", purchaserequestlineitem) as Observable<any>;
  }

}
