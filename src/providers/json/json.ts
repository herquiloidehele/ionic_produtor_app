import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {


  constructor(public http: HttpClient) {

  }


  public getProvincias(){
    return this.http.get('../../assets/data/provinces.json');
  }

  public getDistritos(){
    return this.http.get('../../assets/data/districts.json');
  }




}
