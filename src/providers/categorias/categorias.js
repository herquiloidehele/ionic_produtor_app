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
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoriasProvider = /** @class */ (function () {
    function CategoriasProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.url = 'http://127.0.0.1:8000/api/';
        this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.url = urlProvider.getUrl();
    }
    CategoriasProvider.prototype.getAll = function () {
        return this.http.get(this.url + 'categorias', { headers: this.header });
    };
    CategoriasProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], CategoriasProvider);
    return CategoriasProvider;
}());
export { CategoriasProvider };
//# sourceMappingURL=categorias.js.map