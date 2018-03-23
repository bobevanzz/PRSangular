import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  	List(): Observable<User[]>{
  		return this.http.get("http://localhost:58936/Users/List") as Observable<User[]>;
  	}
	Get(id): Observable<User>{
		return this.http.get("http://localhost:58936/Users/Get/" + id) as Observable<User>;
	}
	Create(user:User): Observable<any>{
		return this.http.post("http://localhost:58936/Users/Create/", user) as Observable<any>;
	}
	Change(user:User): Observable<any>{
		return this.http.post("http://localhost:58936/Users/Change/", user) as Observable<any>;
	}
	Remove(user:User): Observable<any>{
		return this.http.post("http://localhost:58936/Users/Remove/", user) as Observable<any>;
	}
	
}
