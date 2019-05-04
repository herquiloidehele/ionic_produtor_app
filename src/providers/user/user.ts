import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";
import {Observable} from "rxjs";

@Injectable()
export class UserProvider{

  protected headers;


  constructor(public http: HttpClient, public urlAPi: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }



  public createAccount(user): Observable<any> {
    return this.http.post(this.urlAPi.getURL() + 'users/produtor', {user: user}, {headers: this.headers});
  }


  public updateUser(userData, id){
    return this.http.put(this.urlAPi.getURL() + 'users/'+ id, userData, {headers: this.headers});
  }



  public user



}
