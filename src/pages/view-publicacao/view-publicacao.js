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
var ViewPublicacaoPage = /** @class */ (function () {
    function ViewPublicacaoPage(navCtrl, navParams, urlProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.urlProvider = urlProvider;
    }
    ViewPublicacaoPage.prototype.ionViewDidLoad = function () {
        this.publicacao = this.navParams.get('publicacao');
    };
    ViewPublicacaoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    ViewPublicacaoPage.prototype.showOptions = function () {
    };
    ViewPublicacaoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-view-publicacao',
            templateUrl: 'view-publicacao.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, UrlapiProvider])
    ], ViewPublicacaoPage);
    return ViewPublicacaoPage;
}());
export { ViewPublicacaoPage };
//# sourceMappingURL=view-publicacao.js.map