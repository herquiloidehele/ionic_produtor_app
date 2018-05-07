import { Injectable } from '@angular/core';

/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlapiProvider {

  private url = 'http://127.0.0.1:8000/api/';
  // private url = 'https://9af3cdf2.ngrok.io/api/';

  constructor() {
  }


  public getUrl(){
    return this.url;
  }

}
