import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UrlapiProvider} from "../urlapi/urlapi";
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/scan'

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



  getAll(): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'ofertas', {headers: this.headers})
      .retryWhen(errors => {
        return errors.delay(3000).scan((tentativas) => {
            tentativas++;

            if(tentativas < 10){
              console.log({tentativa: tentativas});
              return tentativas;
            }else
              throw errors;
        }, 0);
      });
  }

  getOfertas(produtor_id): Observable<any>{
    return this.http.get(this.urlProvider.getURL()+ 'ofertas/produtores/'+ produtor_id);
  }


  getMinhasOfertas(provedores_id: any): Observable<any>{
    return this.http.get(this.urlProvider.getURL() + 'ofertas/minhas-ofertas/'+provedores_id, {headers: this.headers});
  }


  salvarOferta(oferta: any){
    return this.http.post(this.urlProvider.getURL() +'ofertas', {oferta: oferta}, {headers: this.headers});
  }


  salvarDisponibilidade(disonibilidade: any): Observable<any>{
    return this.http.post(this.urlProvider.getURL() + 'disponibilidade-produto', {disponibilidade: disonibilidade}, {headers: this.headers});
  }


  salvarOfertaParcelada(oferta_id, parcelas){
    return this.http.post(this.urlProvider.getURL() + 'oferta-parcelada', {oferta_id: oferta_id, parcelas: parcelas}, {headers: this.headers});
  }



  getOfertasToRevendedor(revendedor_id){
    return this.http.get(this.urlProvider.getURL() + 'ofertas/revendedor/'+revendedor_id, {headers: this.headers});
  }

}
