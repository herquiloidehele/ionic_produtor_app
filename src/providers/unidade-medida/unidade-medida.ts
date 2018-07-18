import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the UnidadeMedidaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnidadeMedidaProvider {

  private header: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(): Observable<any>{
    return this.http.get(this.urlProvider.getUrl() + 'unidades-medidas', {headers: this.header});
  }



}
