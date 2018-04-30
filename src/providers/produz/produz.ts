import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ProduzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProduzProvider {

  private url: String = 'http://127.0.0.1:8000/api/';
  private headers: HttpHeaders;


  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getMeusProdutos (produtor_id): Observable<any> {
    return this.http.get(this.url  + 'produz/produtor-producao/'+produtor_id, {headers: this.headers});
  }


  public salvarProduz(produz): Observable<any>{
    return this.http.post(this.url + 'produz', {produz: produz}, {headers: this.headers});
  }


}
