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
  Generated class for the InteresseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InteresseProvider = /** @class */ (function () {
    function InteresseProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    InteresseProvider.prototype.getMeusProdutos = function (revendedor_id) {
        return this.http.get(this.urlProvider.getURL() + 'interesse/revendedor_id/' + revendedor_id, { headers: this.headers });
    };
    InteresseProvider.prototype.salvarInteresse = function (interesse) {
        return this.http.post(this.urlProvider.getURL() + 'interesses-produtos', { intresse: interesse }, { headers: this.headers });
    };
    InteresseProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], InteresseProvider);
    return InteresseProvider;
}());
export { InteresseProvider };
//# sourceMappingURL=interesse.js.map