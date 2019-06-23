var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlapiProvider } from "../urlapi/urlapi";
/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JsonProvider = /** @class */ (function () {
    function JsonProvider(http, urlApi) {
        this.http = http;
        this.urlApi = urlApi;
    }
    JsonProvider.prototype.getProvincias = function () {
        return this.http.get(this.urlApi.getURL() + 'provincias');
    };
    JsonProvider.prototype.getDistritos = function () {
        return this.http.get('../../assets/data/districts.json');
    };
    JsonProvider.prototype.getProdutos = function () {
        return this.http.get('../../assets/data/produtos.json');
    };
    JsonProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], JsonProvider);
    return JsonProvider;
}());
export { JsonProvider };
//# sourceMappingURL=json.js.map