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
import { forkJoin } from "rxjs/observable/forkJoin";
/*
  Generated class for the ProduzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProduzProvider = /** @class */ (function () {
    function ProduzProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ProduzProvider.prototype.getMeusProdutos = function (produtor_id) {
        return this.http.get(this.urlProvider.getURL() + 'produz/produtor-producao/' + produtor_id, { headers: this.headers });
    };
    ProduzProvider.prototype.salvarProduz = function (produz) {
        return this.http.post(this.urlProvider.getURL() + 'produz', { produz: produz }, { headers: this.headers });
    };
    ProduzProvider.prototype.updateProduz = function (id_produz, dados) {
        return this.http.put(this.urlProvider.getURL() + 'produz/' + id_produz, dados, { headers: this.headers });
    };
    ProduzProvider.prototype.getProduz = function (idProduz) {
        var response1 = this.http.get(this.urlProvider.getURL() + 'produz/' + idProduz);
        var response2 = this.http.get(this.urlProvider.getURL() + 'produz/' + idProduz + '/epocas');
        return forkJoin([response1, response2]);
    };
    ProduzProvider.prototype.salvarEpocas = function (idProduz, epocas) {
        return this.http.post(this.urlProvider.getURL() + 'epocas', { produz_id: idProduz, epocas: epocas });
    };
    ProduzProvider.prototype.getEpoca = function (idProduz) {
        return this.http.get(this.urlProvider.getURL() + 'epocas/' + idProduz);
    };
    ProduzProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], ProduzProvider);
    return ProduzProvider;
}());
export { ProduzProvider };
//# sourceMappingURL=produz.js.map