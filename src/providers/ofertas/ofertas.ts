import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";

/*
  Generated class for the OfertasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfertasProvider {

  private headers: HttpHeaders;


  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }



  getMinhasOfertas(provedores_id: any): Observable<any>{
    return this.http.get(this.urlProvider.getUrl() + 'ofertas/minhas-ofertas/'+provedores_id, {headers: this.headers});
  }


  salvarOferta(oferta: any, produtor){
    return this.http.post(this.urlProvider.getUrl() +'ofertas', {oferta: oferta, produtor_id: produtor }, {headers: this.headers});
  }


  salvarDisponibilidade(disonibilidade: any): Observable<any>{
    return this.http.post(this.urlProvider.getUrl() + 'disponibilidade-produto', {disponibilidade: disonibilidade}, {headers: this.headers});
  }


  salvarOfertaParcelada(oferta_id, parcelas){
    return this.http.post(this.urlProvider.getUrl() + 'oferta-parcelada', {oferta_id: oferta_id, parcelas: parcelas}, {headers: this.headers});
  }



  getOfertasToRevendedor(revendedor_id){
    return this.http.get(this.urlProvider.getUrl() + 'ofertas/revendedor/'+revendedor_id, {headers: this.headers});
  }

}
