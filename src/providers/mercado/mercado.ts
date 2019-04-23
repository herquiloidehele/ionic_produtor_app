import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the MercadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoProvider {

  private headers: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'mercados', {headers: this.headers});
  }

  salvar(mercado: any): Observable<any>{
    return this.http.post(this.urlProvider.getURL() + 'mercados',{mercado: mercado}, {headers: this.headers});
  }


  getProdutosMercado(mercadoId: number){

  }


}
