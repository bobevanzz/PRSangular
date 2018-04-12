import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@services/system.service';

import { PurchaseRequest } from '@models/purchaseRequest';

const url = "http://localhost:4200/PurchaseRequests/";

@Injectable()
export class PurchaseRequestService {

  constructor(private http: HttpClient, private sys: SystemService) { }

  ReviewList(): Observable<PurchaseRequest[]> {
    return this.http.get(url+"ReviewList") as Observable<PurchaseRequest[]>;
  }
  List(): Observable<PurchaseRequest[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
  }
  Get(id): Observable<PurchaseRequest> {
    return this.http.get(url+"Get/"+id) as Observable<PurchaseRequest>;
  }
  Create(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url+"Create", purchaseRequest) as Observable<any>;
  }
  Change(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url+"Change", purchaseRequest) as Observable<any>;
  }
  Remove(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url+"Remove", purchaseRequest) as Observable<any>;
  }

}
