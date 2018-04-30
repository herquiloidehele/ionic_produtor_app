import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the UnidadeMedidaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnidadeMedidaProvider {

  private url = 'http://127.0.0.1:8000/api/';
  private header: HttpHeaders;

  constructor(public http: HttpClient) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(): Observable<any>{
    return this.http.get(this.url + 'unidades-medidas', {headers: this.header});
  }



}
