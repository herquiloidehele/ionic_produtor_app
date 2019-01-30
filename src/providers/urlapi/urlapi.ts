import { Injectable } from '@angular/core';

/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlapiProvider {


  private url: String;
  private urlSimple: String;

  constructor() {
    this.url = 'http://127.0.0.1:8000/api/';
    this.urlSimple = 'http://127.0.0.1:8000/';
  }

  public getURL(): String{
    return this.url;
  }

  public getSimpleURL(): String{
    return this.urlSimple;
  }


}
