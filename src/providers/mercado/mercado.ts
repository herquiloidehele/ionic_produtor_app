import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";
import {forkJoin} from "rxjs/observable/forkJoin";


@Injectable()
export class MercadoProvider {

  private headers: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'mercados', {headers: this.headers});
  }

  salvar(mercado: any): Observable<any>{
    return this.http.post(this.urlProvider.getURL() + 'mercados',{mercado: mercado}, {headers: this.headers});
  }


  getProdutosMercado(mercadoId: number): Observable<any>{
    let requisicao1 = this.http.get(this.urlProvider.getURL() + 'mercados/'+mercadoId+'/todos-produtos');
    let requisicao2 = this.http.get(this.urlProvider.getURL() + 'mercados/'+mercadoId+'/produtos-procurados');

    return forkJoin([requisicao1, requisicao2]);
  }


}
