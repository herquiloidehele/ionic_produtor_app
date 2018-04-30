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
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutosProvider = /** @class */ (function () {
    function ProdutosProvider(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/api/';
        this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ProdutosProvider.prototype.getAll = function () {
        return this.http.get(this.url + 'produtos', { headers: this.header });
    };
    ProdutosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProdutosProvider);
    return ProdutosProvider;
}());
export { ProdutosProvider };
//# sourceMappingURL=produtos.js.map