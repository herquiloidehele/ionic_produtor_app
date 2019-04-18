import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {


  constructor(public http: HttpClient, public urlApi: UrlapiProvider) {

  }


  public getProvincias(){
    return this.http.get(this.urlApi.getURL() + 'provincias');
  }

  public getDistritos(){
    return this.http.get('../../assets/data/districts.json');
  }

  public getProdutos(){
    return this.http.get('../../assets/data/produtos.json')
  }




}
