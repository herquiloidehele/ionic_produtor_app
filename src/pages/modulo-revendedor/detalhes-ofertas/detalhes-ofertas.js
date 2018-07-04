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
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetalhesOfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesOfertasPage = /** @class */ (function () {
    function DetalhesOfertasPage(navCtrl, navParams, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.parcelas = [];
    }
    DetalhesOfertasPage.prototype.ionViewWillLoad = function () {
        this.oferta = this.navParams.get('oferta');
        this.parcelas = this.oferta.parcelas;
        console.log(this.parcelas);
    };
    DetalhesOfertasPage.prototype.ionViewDidLoad = function () {
    };
    DetalhesOfertasPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    DetalhesOfertasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-detalhes-ofertas',
            templateUrl: 'detalhes-ofertas.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], DetalhesOfertasPage);
    return DetalhesOfertasPage;
}());
export { DetalhesOfertasPage };
//# sourceMappingURL=detalhes-ofertas.js.map