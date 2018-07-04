import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the InteresseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InteresseProvider {

  private url: String;
  private headers: HttpHeaders;


  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.url = urlProvider.getUrl();
  }

  public getMeusProdutos (revendedor_id): Observable<any> {
    return this.http.get(this.url  + 'interesse/revendedor_id/'+revendedor_id, {headers: this.headers});
  }


  public salvarInteresse(interesse): Observable<any>{
    return this.http.post(this.url + 'interesses-produtos', {intresse: interesse}, {headers: this.headers});
  }


}
