import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the ProduzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProduzProvider {

  private headers: HttpHeaders;


  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getMeusProdutos (produtor_id): Observable<any> {
    return this.http.get(this.urlProvider.getURL()  + 'produz/produtor-producao/'+produtor_id, {headers: this.headers});
  }


  public salvarProduz(produz): Observable<any>{
    return this.http.post(this.urlProvider.getURL() + 'produz', {produz: produz}, {headers: this.headers});
  }


}
