import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLineitem } from '../models/purchaseRequestLineitem';

const url = "http://localhost:58248/PurchaseRequestLineitems/";

@Injectable()
export class PurchaseRequestLineitemService {

  constructor(private http: HttpClient) { }

  List(): Observable<PurchaseRequestLineitem[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequestLineitem[]>;
  }
  Get(id): Observable<PurchaseRequestLineitem> {
    return this.http.get(url+"Get/"+id) as Observable<PurchaseRequestLineitem>;
  }
  Create(purchaseRequestLineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Create", purchaseRequestLineitem) as Observable<any>;
  }
  Change(purchaseRequestLineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Change", purchaseRequestLineitem) as Observable<any>;
  }
  Remove(purchaseRequestLineitem: PurchaseRequestLineitem): Observable<any> {
    return this.http.post(url+"Remove", purchaseRequestLineitem) as Observable<any>;
  }

}
