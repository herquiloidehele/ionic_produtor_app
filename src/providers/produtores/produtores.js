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
  Generated class for the ProdutoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutoresProvider = /** @class */ (function () {
    function ProdutoresProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ProdutoresProvider.prototype.getAll = function () {
        return this.http.get(this.urlProvider.getURL() + 'produtores', { headers: this.header });
    };
    ProdutoresProvider.prototype.getProdutor = function (id) {
        return this.http.get(this.urlProvider.getURL() + 'produtores/' + id, { headers: this.header });
    };
    ProdutoresProvider.prototype.get = function (produtor_id) {
        return this.http.get(this.urlProvider.getURL() + 'produtores/' + produtor_id, { headers: this.header });
    };
    ProdutoresProvider.prototype.update = function (userData, id) {
        return this.http.put(this.urlProvider.getURL() + 'produtores/' + id, userData, { headers: this.header });
    };
    ProdutoresProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], ProdutoresProvider);
    return ProdutoresProvider;
}());
export { ProdutoresProvider };
//# sourceMappingURL=produtores.js.map