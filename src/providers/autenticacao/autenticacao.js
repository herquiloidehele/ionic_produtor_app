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
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AutenticacaoProvider = /** @class */ (function () {
    function AutenticacaoProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    AutenticacaoProvider.prototype.login = function (user) {
        return this.http.post(this.urlProvider.getUrl() + 'login', user, { headers: this.headers });
    };
    AutenticacaoProvider.prototype.getUserFromToken = function (token) {
        return this.http.post(this.urlProvider.getUrl() + 'get-user-token/' + token, { token: token }, { headers: this.headers });
    };
    AutenticacaoProvider.prototype.logout = function (token) {
        return this.http.post(this.urlProvider.getUrl() + 'logout', { token: token }, { headers: this.headers });
    };
    AutenticacaoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], AutenticacaoProvider);
    return AutenticacaoProvider;
}());
export { AutenticacaoProvider };
//# sourceMappingURL=autenticacao.js.map