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
    return this.http.get(this.urlProvider.getURL() + 'produtores/'+id, {headers: this.header});
  }

  public get(produtor_id): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'produtores/'+produtor_id, {headers: this.header});
  }

  public update(userData, id){
    return this.http.put(this.urlProvider.getURL() + 'produtores/'+ id, userData, {headers: this.header});
  }

}
