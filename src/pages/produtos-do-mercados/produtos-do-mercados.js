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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
/**
 * Generated class for the ProdutosDoMercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosDoMercadosPage = /** @class */ (function () {
    function ProdutosDoMercadosPage(navCtrl, navParams, urlApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.urlApi = urlApi;
        this.produtos = [];
        this.produtosCopy = [];
    }
    ProdutosDoMercadosPage.prototype.ionViewDidLoad = function () {
        this.produtos = this.navParams.get('produtos');
        this.mercado = this.navParams.get('mercado');
        this.produtosCopy = this.produtos;
    };
    ProdutosDoMercadosPage.prototype.onInput = function (event) {
        this.produtos = this.produtosCopy;
        this.produtos = this.produtos.filter(function (produto) {
            return (produto['produto'].designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
        });
    };
    ProdutosDoMercadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtos-do-mercados',
            templateUrl: 'produtos-do-mercados.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, UrlapiProvider])
    ], ProdutosDoMercadosPage);
    return ProdutosDoMercadosPage;
}());
export { ProdutosDoMercadosPage };
//# sourceMappingURL=produtos-do-mercados.js.map