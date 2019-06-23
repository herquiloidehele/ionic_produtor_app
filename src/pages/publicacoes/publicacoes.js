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
import { OfertasProvider } from "../../providers/ofertas/ofertas";
import { RegistarOpertasPage } from "../registar-opertas/registar-opertas";
import { ViewPublicacaoPage } from "../view-publicacao/view-publicacao";
import { Storage } from "@ionic/storage";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
var PublicacoesPage = /** @class */ (function () {
    function PublicacoesPage(navCtrl, navParams, ofertasProvider, storageController, urlApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ofertasProvider = ofertasProvider;
        this.storageController = storageController;
        this.urlApiProvider = urlApiProvider;
        this.hideTabs = true;
        this.showSearch = false;
        this.loader = true;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 0,
            centeredSlides: true
        };
    }
    PublicacoesPage.prototype.ionViewWillEnter = function () {
        this.getMinhasPublicacoes();
    };
    PublicacoesPage.prototype.onInput = function (event) {
        this.publicacoes = this.publicacoesCopy;
        this.publicacoes = this.publicacoes.filter(function (publicacao) {
            return (publicacao.produto.designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()));
        });
    };
    PublicacoesPage.prototype.onBlur = function () {
        this.changeShowSearch();
    };
    PublicacoesPage.prototype.onCancel = function () {
        console.log('cancelado');
        this.changeShowSearch();
    };
    PublicacoesPage.prototype.goToRegistarOfertas = function () {
        this.navCtrl.push(RegistarOpertasPage);
    };
    PublicacoesPage.prototype.viewPublicacao = function (publicacao) {
        this.navCtrl.push(ViewPublicacaoPage, { publicacao: publicacao });
    };
    PublicacoesPage.prototype.getMinhasPublicacoes = function () {
        var _this = this;
        this.storageController.get('user').then(function (user) {
            _this.ofertasProvider.getOfertas(user['id']).subscribe(function (response) {
                console.log(response);
                _this.publicacoes = response['ofertas'];
                _this.publicacoesCopy = response['ofertas'];
                _this.storageController.set('publicacoes', _this.publicacoes);
            }, function (error) {
                console.log(error);
                _this.getOfertasLocais();
            });
        }).catch(function (error) {
            console.log({ erro: error });
        });
        this.loader = false;
    };
    PublicacoesPage.prototype.getOfertasLocais = function () {
        var _this = this;
        this.storageController.get('publicacoes').then(function (publicacoes) {
            _this.publicacoes = publicacoes;
        }).catch(function (error) {
            console.log(error);
        });
    };
    PublicacoesPage.prototype.changeShowSearch = function () {
        this.showSearch = !this.showSearch;
    };
    PublicacoesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-publicacoes',
            templateUrl: 'publicacoes.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            OfertasProvider,
            Storage,
            UrlapiProvider])
    ], PublicacoesPage);
    return PublicacoesPage;
}());
export { PublicacoesPage };
//# sourceMappingURL=publicacoes.js.map