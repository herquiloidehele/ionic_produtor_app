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
import { MercadoProvider } from "../../providers/mercado/mercado";
import { MercadoDetailsPage } from "../mercado-details/mercado-details";
var MercadoPage = /** @class */ (function () {
    function MercadoPage(navCtrl, navParams, mercadoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mercadoProvider = mercadoProvider;
        this.showSearch = false;
    }
    MercadoPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    MercadoPage.prototype.getAll = function () {
        var _this = this;
        this.mercadoProvider.getAll().subscribe(function (resultado) {
            console.log(resultado);
            _this.mercados = resultado['mercados'];
            _this.mercadosCopy = resultado['mercados'];
            console.log(resultado);
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Busca de Mercados Terminada');
        });
    };
    MercadoPage.prototype.showMercado = function (mercado) {
        this.navCtrl.push(MercadoDetailsPage, { mercado: mercado });
    };
    MercadoPage.prototype.onInput = function (event) {
        this.mercados = this.mercadosCopy;
        this.mercados = this.mercados.filter(function (mercado, indice) {
            return (mercado.designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
        });
    };
    MercadoPage.prototype.onBlur = function () {
        this.changeShowSearch();
    };
    MercadoPage.prototype.onCancel = function () {
        console.log('cancelado');
        this.changeShowSearch();
    };
    MercadoPage.prototype.changeShowSearch = function () {
        this.showSearch = !this.showSearch;
    };
    MercadoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mercados',
            templateUrl: 'mercado.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, MercadoProvider])
    ], MercadoPage);
    return MercadoPage;
}());
export { MercadoPage };
//# sourceMappingURL=mercado.js.map