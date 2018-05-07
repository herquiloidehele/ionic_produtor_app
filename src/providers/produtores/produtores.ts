import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the ProdutoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoresProvider {

    private url: String;
    private header: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
    this.url = urlProvider.getUrl();
  }


  getAll(){
    return this.http.get(this.url + 'produtores', {headers: this.header});
  }

}
