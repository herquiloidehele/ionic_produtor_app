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
import { ProdutoresProvider } from "../../providers/produtores/produtores";
var PerfilPublicoPage = /** @class */ (function () {
    function PerfilPublicoPage(navCtrl, navParams, produtoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoresProvider = produtoresProvider;
        this.loader = true;
    }
    PerfilPublicoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.produtoresProvider.get(this.navParams.get('produtor_id')).subscribe(function (response) {
            _this.user = response['produtor'];
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loader = false;
        });
    };
    PerfilPublicoPage.prototype.getImagesCount = function () {
        var quantidade = 0;
        if (this.user['ofertas'].length == 0)
            return 0;
        else {
            this.user['ofertas'].forEach(function (oferta) {
                oferta['imagens'].forEach(function (imagem) {
                    quantidade++;
                });
            });
            return quantidade;
        }
    };
    PerfilPublicoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    PerfilPublicoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-perfil-publico',
            templateUrl: 'perfil-publico.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProdutoresProvider])
    ], PerfilPublicoPage);
    return PerfilPublicoPage;
}());
export { PerfilPublicoPage };
//# sourceMappingURL=perfil-publico.js.map