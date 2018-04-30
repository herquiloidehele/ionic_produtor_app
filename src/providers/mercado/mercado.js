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
/*
  Generated class for the MercadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MercadoProvider = /** @class */ (function () {
    function MercadoProvider(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/api/';
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    MercadoProvider.prototype.getAll = function () {
        return this.http.get(this.url + 'mercados', { headers: this.headers });
    };
    MercadoProvider.prototype.salvar = function (mercado) {
        return this.http.post(this.url + 'mercados', { mercado: mercado }, { headers: this.headers });
    };
    MercadoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MercadoProvider);
    return MercadoProvider;
}());
export { MercadoProvider };
//# sourceMappingURL=mercado.js.map