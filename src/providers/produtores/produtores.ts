import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoresProvider {

    private url = 'http://127.0.0.1:8000/api/';
    private header: HttpHeaders;

  constructor(public http: HttpClient) {
      this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(){
    return this.http.get(this.url + 'produtores', {headers: this.header});
  }

}
