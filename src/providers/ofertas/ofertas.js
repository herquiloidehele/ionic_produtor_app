var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlapiProvider } from "../urlapi/urlapi";
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';
/*
  Generated class for the OfertasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OfertasProvider = /** @class */ (function () {
    function OfertasProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    OfertasProvider.prototype.getAll = function () {
        return this.http.get(this.urlProvider.getURL() + 'ofertas', { headers: this.headers })
            .retryWhen(function (errors) {
            return errors.delay(3000).scan(function (tentativas) {
                tentativas++;
                if (tentativas < 10) {
                    console.log({ tentativa: tentativas });
                    return tentativas;
                }
                else
                    throw errors;
            }, 0);
        });
    };
    OfertasProvider.prototype.getOfertas = function (produtor_id) {
        return this.http.get(this.urlProvider.getURL() + 'ofertas/produtores/' + produtor_id);
    };
    OfertasProvider.prototype.getMinhasOfertas = function (provedores_id) {
        return this.http.get(this.urlProvider.getURL() + 'ofertas/minhas-ofertas/' + provedores_id, { headers: this.headers });
    };
    OfertasProvider.prototype.salvarOferta = function (oferta) {
        return this.http.post(this.urlProvider.getURL() + 'ofertas', { oferta: oferta }, { headers: this.headers });
    };
    OfertasProvider.prototype.salvarDisponibilidade = function (disonibilidade) {
        return this.http.post(this.urlProvider.getURL() + 'disponibilidade-produto', { disponibilidade: disonibilidade }, { headers: this.headers });
    };
    OfertasProvider.prototype.salvarOfertaParcelada = function (oferta_id, parcelas) {
        return this.http.post(this.urlProvider.getURL() + 'oferta-parcelada', { oferta_id: oferta_id, parcelas: parcelas }, { headers: this.headers });
    };
    OfertasProvider.prototype.getOfertasToRevendedor = function (revendedor_id) {
        return this.http.get(this.urlProvider.getURL() + 'ofertas/revendedor/' + revendedor_id, { headers: this.headers });
    };
    OfertasProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], OfertasProvider);
    return OfertasProvider;
}());
export { OfertasProvider };
//# sourceMappingURL=ofertas.js.map