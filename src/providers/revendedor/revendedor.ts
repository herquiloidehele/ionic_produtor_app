import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the RevendedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RevendedorProvider {

  private url: String = 'http://127.0.0.1:8000/api/';
  private headers: HttpHeaders;


  constructor(public http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getAll() : Observable<any> {
    return this.http.get(this.url + 'revendedores', {headers: this.headers});
  }


}
