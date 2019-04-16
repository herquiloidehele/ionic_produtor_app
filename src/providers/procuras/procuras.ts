import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the ProcurasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcurasProvider {


  private headers: HttpHeaders;


  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  public getAll() : Observable<any> {
    return this.http.get(this.urlProvider.getURL() + 'procuras',);
  }

  public getProdutores(procura_id): Observable<any> {
   return this.http.get(this.urlProvider.getURL() +'disponibilidade-produto/produtores/'+procura_id);
  }

  public salvarDisponibilidade(disponibilidade): Observable<any>{
    return this.http.post(this.urlProvider.getURL() + 'disponibilidade-produto',  disponibilidade, {headers:this.headers});
  }

  public actualizarDisponibilidade(disponibilidade, disponibilidade_id): Observable<any>{
    return this.http.put(this.urlProvider.getURL() + 'disponibilidade-produto/'+disponibilidade_id, disponibilidade, {headers: this.headers});
  }

}
