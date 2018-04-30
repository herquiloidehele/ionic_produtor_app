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
import { RegistarRevendedoresPage } from "../cadastros/registar-revendedores/registar-revendedores";
import { RevendedorProvider } from "../../../providers/revendedor/revendedor";
/**
 * Generated class for the RevendedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevendedoresPage = /** @class */ (function () {
    function RevendedoresPage(navCtrl, navParams, revendedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.revendedorProvider = revendedorProvider;
        this.revendedores = [];
    }
    RevendedoresPage.prototype.onClickAdicionarRevendedor = function () {
        this.navCtrl.push(RegistarRevendedoresPage);
    };
    RevendedoresPage.prototype.ionViewDidLoad = function () {
        this.getAll();
    };
    RevendedoresPage.prototype.getAll = function () {
        var _this = this;
        this.revendedorProvider.getAll().subscribe(function (dados) {
            _this.revendedores = dados['revendedores'];
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Busca de revendedores completa');
        });
    };
    RevendedoresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-revendedores',
            templateUrl: 'revendedores.html',
            entryComponents: [RegistarRevendedoresPage]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RevendedorProvider])
    ], RevendedoresPage);
    return RevendedoresPage;
}());
export { RevendedoresPage };
//# sourceMappingURL=revendedores.js.map