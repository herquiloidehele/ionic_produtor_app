import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {

  private header: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getAll(){
    return this.http.get(this.urlProvider.getURL()+'categorias', {headers: this.header});
  }


}
