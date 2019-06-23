var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
var AdicionarProdutosPage = /** @class */ (function () {
    function AdicionarProdutosPage(viewCtr, navParams, urlApi) {
        this.viewCtr = viewCtr;
        this.navParams = navParams;
        this.urlApi = urlApi;
        this.produtosProduzidos = this.navParams.get('produtos_produzidos');
        this.produtos = this.navParams.get('produtos');
        console.log(this.produtosProduzidos);
    }
    AdicionarProdutosPage.prototype.ionViewDidLoad = function () {
    };
    AdicionarProdutosPage.prototype.selecionarProduto = function (produto) {
        this.viewCtr.dismiss(produto);
    };
    AdicionarProdutosPage.prototype.isIncluded = function (produto) {
        for (var _i = 0, _a = this.produtosProduzidos; _i < _a.length; _i++) {
            var produtoProduzido = _a[_i];
            if (produto.id == produtoProduzido.id) {
                return false;
            }
        }
        return true;
    };
    AdicionarProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-adicionar-produtos',
            templateUrl: 'adicionar-produtos.html',
        }),
        __metadata("design:paramtypes", [ViewController, NavParams, UrlapiProvider])
    ], AdicionarProdutosPage);
    return AdicionarProdutosPage;
}());
export { AdicionarProdutosPage };
//# sourceMappingURL=adicionar-produtos.js.map