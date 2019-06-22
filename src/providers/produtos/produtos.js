var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlapiProvider } from "../urlapi/urlapi";
import 'rxjs/add/operator/retry';
/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutosProvider = /** @class */ (function () {
    function ProdutosProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ProdutosProvider.prototype.getAllProdutos = function (meus_produtos) {
        return this.http.get(this.urlProvider.getURL() + 'produtos?', { params: (new HttpParams()).set('produtos', JSON.stringify(meus_produtos)) });
    };
    ProdutosProvider.prototype.getAll = function () {
        return this.http.get(this.urlProvider.getURL() + 'produtos');
    };
    ProdutosProvider.prototype.salvar = function (produto) {
        return this.http.post(this.urlProvider.getURL() + 'produtos', produto, { headers: this.header });
    };
    ProdutosProvider.prototype.adicionarProdutosProduzidos = function (idProdutor, idProduto) {
        return this.http.post(this.urlProvider.getURL() + 'produz', { idProdutor: idProdutor, idProduto: idProduto }, { headers: this.header });
    };
    ProdutosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], ProdutosProvider);
    return ProdutosProvider;
}());
export { ProdutosProvider };
//# sourceMappingURL=produtos.js.map