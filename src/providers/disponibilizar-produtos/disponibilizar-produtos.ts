import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the DisponibilizarProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisponibilizarProdutosProvider {


  private url;
  private headers: HttpHeaders;

  constructor(public http: HttpClient, private urlProvider: UrlapiProvider) {
    this.url = urlProvider.getUrl();
    this.headers = new HttpHeaders({'Content-Type': 'Application/json'});
  }


  salvar(){
    this.http.post('');
  }


}
