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
  Generated class for the RevendedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RevendedorProvider = /** @class */ (function () {
    function RevendedorProvider(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/api/';
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    RevendedorProvider.prototype.getAll = function () {
        return this.http.get(this.url + 'revendedores', { headers: this.headers });
    };
    RevendedorProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RevendedorProvider);
    return RevendedorProvider;
}());
export { RevendedorProvider };
//# sourceMappingURL=revendedor.js.map