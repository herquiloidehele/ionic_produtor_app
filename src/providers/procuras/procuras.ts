import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ProcurasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcurasProvider {


  private url: String = 'http://127.0.0.1:8000/api/';
  private headers: HttpHeaders;


  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getAll() : Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.post(this.url + 'procuras/produtos-produtor', {token: token},{headers: this.headers});
  }



}