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
/**
 * Generated class for the ProdutoSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoSelectPage = /** @class */ (function () {
    function ProdutoSelectPage(viewCtr, navParams, urlProvider) {
        this.viewCtr = viewCtr;
        this.navParams = navParams;
        this.urlProvider = urlProvider;
        this.produtos = [];
        this.produtos = this.navParams.get('produtos');
        this.produtosProduzidos = this.navParams.get('produtos_produzidos');
    }
    ProdutoSelectPage.prototype.selecionarProduto = function (produto) {
        this.viewCtr.dismiss(produto);
    };
    ProdutoSelectPage.prototype.dismiss = function () {
        this.viewCtr.dismiss(null);
    };
    ProdutoSelectPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produto-select',
            templateUrl: 'produto-select.html',
        }),
        __metadata("design:paramtypes", [ViewController, NavParams, UrlapiProvider])
    ], ProdutoSelectPage);
    return ProdutoSelectPage;
}());
export { ProdutoSelectPage };
//# sourceMappingURL=produto-select.js.map