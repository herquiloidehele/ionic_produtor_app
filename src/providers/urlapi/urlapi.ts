import { Injectable } from '@angular/core';

/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlapiProvider {


  private url: any;

  constructor() {
    this.url = 'http://127.0.0.1:8000/api/';
  }

  public getURL(){
    return this.url;
  }


}
