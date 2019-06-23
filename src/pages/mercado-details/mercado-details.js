var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RevendedorProfilePage } from "../revendedor-profile/revendedor-profile";
import { ProdutoMaisProduradosPage } from "../produto-mais-produrados/produto-mais-produrados";
import { ProdutosDoMercadosPage } from "../produtos-do-mercados/produtos-do-mercados";
import { MercadoProvider } from "../../providers/mercado/mercado";
var MercadoDetailsPage = /** @class */ (function () {
    function MercadoDetailsPage(navCtrl, navParams, mercadosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mercadosProvider = mercadosProvider;
        this.titulos = "Revendedores";
        this.produtosMercado = [];
        this.produtosMaisProcurados = [];
        this.mercado = this.navParams.get('mercado');
    }
    MercadoDetailsPage.prototype.ionViewWillEnter = function () {
        this.getProdutosMercado();
    };
    MercadoDetailsPage.prototype.segmentChanged = function (evento) {
        this.content.scrollTo(0, 190);
    };
    MercadoDetailsPage.prototype.onScroll = function (event) {
        console.log(event);
    };
    MercadoDetailsPage.prototype.onScrollStart = function () {
        console.log("Scroll Iniciou");
    };
    MercadoDetailsPage.prototype.onScrollEnd = function () {
        console.log("Scroll Terminou");
    };
    MercadoDetailsPage.prototype.getProdutosMercado = function () {
        var _this = this;
        this.mercadosProvider.getProdutosMercado(this.mercado['id']).subscribe(function (responseList) {
            console.log(responseList);
            _this.produtosMercado = responseList[0]['produtos'];
            _this.produtosMaisProcurados = responseList[1]['produtos'];
        }, function (error) {
            console.log(error);
        });
    };
    MercadoDetailsPage.prototype.goToRevendedor = function (revendedor) {
        this.navCtrl.push(RevendedorProfilePage, { revendedor_id: revendedor.id });
    };
    MercadoDetailsPage.prototype.goToProdutosMaisProcurados = function () {
        this.navCtrl.push(ProdutoMaisProduradosPage, { produtos: this.produtosMaisProcurados, mercado: this.mercado });
    };
    MercadoDetailsPage.prototype.goToProdutosDoMercado = function () {
        this.navCtrl.push(ProdutosDoMercadosPage, { produtos: this.produtosMercado, mercado: this.mercado });
    };
    MercadoDetailsPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], MercadoDetailsPage.prototype, "content", void 0);
    __decorate([
        ViewChild('ion_segment'),
        __metadata("design:type", HTMLDivElement)
    ], MercadoDetailsPage.prototype, "divElementTabs", void 0);
    __decorate([
        ViewChild('divElment'),
        __metadata("design:type", HTMLDivElement)
    ], MercadoDetailsPage.prototype, "divElementOptions", void 0);
    MercadoDetailsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mercado-details',
            templateUrl: 'mercado-details.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            MercadoProvider])
    ], MercadoDetailsPage);
    return MercadoDetailsPage;
}());
export { MercadoDetailsPage };
//# sourceMappingURL=mercado-details.js.map