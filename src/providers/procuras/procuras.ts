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


  private url: String;
  private headers: HttpHeaders;


  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.url = urlProvider.getUrl();
  }


  public getAll() : Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.post(this.url + 'procuras/produtos-produtor', {token: token},{headers: this.headers});
  }

  public getProdutores(procura_id): Observable<any> {
   return this.http.get(this.url+'disponibilidade-produto/produtores/'+procura_id);
  }


  public salvarDisponibilidade(disponibilidade): Observable<any>{
    return this.http.post(this.url+ 'disponibilidade-produto',  disponibilidade, {headers:this.headers});
  }

  public actualizarDisponibilidade(disponibilidade, disponibilidade_id): Observable<any>{
    return this.http.put(this.url+ 'disponibilidade-produto/'+disponibilidade_id, disponibilidade, {headers: this.headers});
  }

}
