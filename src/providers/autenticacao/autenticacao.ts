import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {

  private url: String;
  private headers: HttpHeaders;

  constructor(public http: HttpClient, private urlProvider: UrlapiProvider) {
    this.url = this.urlProvider.getUrl();
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }



  public login(user: any) : Observable<any>{
    return this.http.post(this.url+'login', user, {headers: this.headers} );
  }

  public getUserFromToken(token: any): Observable<any>{
    return this.http.post(this.url+ 'get-user-token/'+token, {token: token}, {headers: this.headers});
  }

  public logout(token: String): Observable<any>{
    return this.http.post(this.url+ 'logout', {token: token}, {headers: this.headers});
  }







}
