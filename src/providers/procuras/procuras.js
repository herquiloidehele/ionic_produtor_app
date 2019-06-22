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
/*
  Generated class for the ProcurasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProcurasProvider = /** @class */ (function () {
    function ProcurasProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ProcurasProvider.prototype.getAll = function () {
        return this.http.get(this.urlProvider.getURL() + 'procuras');
    };
    ProcurasProvider.prototype.getProcurasSemelhantes = function (idProcura) {
        return this.http.get(this.urlProvider.getURL() + 'procuras-semelhantes/' + idProcura);
    };
    ProcurasProvider.prototype.getProdutores = function (procura_id) {
        return this.http.get(this.urlProvider.getURL() + 'disponibilidade-produto/produtores/' + procura_id);
    };
    ProcurasProvider.prototype.salvarDisponibilidade = function (disponibilidade) {
        return this.http.post(this.urlProvider.getURL() + 'disponibilidade-produto', disponibilidade, { headers: this.headers });
    };
    ProcurasProvider.prototype.actualizarDisponibilidade = function (disponibilidade, disponibilidade_id) {
        return this.http.put(this.urlProvider.getURL() + 'disponibilidade-produto/' + disponibilidade_id, disponibilidade, { headers: this.headers });
    };
    ProcurasProvider.prototype.get = function (procura_id) {
        return this.http.get(this.urlProvider.getURL() + 'procuras/' + procura_id);
    };
    ProcurasProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], ProcurasProvider);
    return ProcurasProvider;
}());
export { ProcurasProvider };
//# sourceMappingURL=procuras.js.map