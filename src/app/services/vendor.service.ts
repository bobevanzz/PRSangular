import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Vendor} from '../models/vendor';
@Injectable()
export class VendorService {

  constructor(private http: HttpClient) { }

  	List(): Observable<Vendor[]>{
  		return this.http.get("http://localhost:58936/Vendors/List") as Observable<Vendor[]>;
  	}
	Get(id): Observable<Vendor>{
		return this.http.get("http://localhost:58936/Vendors/Get/" + id) as Observable<Vendor>;
	}
	Create(vendor:Vendor): Observable<any>{
		return this.http.post("http://localhost:58936/Vendors/Create/", vendor) as Observable<any>;
	}
	Change(vendor:Vendor): Observable<any>{
		return this.http.post("http://localhost:58936/Vendors/Change/", vendor) as Observable<any>;
	}
	Remove(vendor:Vendor): Observable<any>{
		return this.http.post("http://localhost:58936/Vendors/Remove/", vendor) as Observable<any>;
	}
	
}
