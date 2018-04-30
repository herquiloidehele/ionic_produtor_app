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
import { ProdutoresProvider } from "../../../providers/produtores/produtores";
/**
 * Generated class for the ProdutoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoresPage = /** @class */ (function () {
    function ProdutoresPage(navCtrl, navParams, produtoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoresProvider = produtoresProvider;
        this.produtores = [];
    }
    ProdutoresPage.prototype.ionViewDidLoad = function () {
        this.getAll();
    };
    ProdutoresPage.prototype.getAll = function () {
        var _this = this;
        this.produtoresProvider.getAll().subscribe(function (dados) {
            _this.produtores = dados['produtores'];
            console.log(_this.produtores);
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Busca de produtores terminada');
        });
    };
    ProdutoresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtores',
            templateUrl: 'produtores.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProdutoresProvider])
    ], ProdutoresPage);
    return ProdutoresPage;
}());
export { ProdutoresPage };
//# sourceMappingURL=produtores.js.map