import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";
import {Observable} from "rxjs";

/*
  Generated class for the ProdutoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoresProvider {

    private header: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getAll(){
    return this.http.get(this.urlProvider.getURL() + 'produtores', {headers: this.header});
  }

  public getProdutor(id: number): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'produtores/'+id);
  }

  public get(produtor_id): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'produtores/'+produtor_id);
  }

}
