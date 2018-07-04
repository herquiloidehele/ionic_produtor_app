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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OfertasProvider } from "../../../providers/ofertas/ofertas";
import { MeusProdutosPage } from "../meus-produtos/meus-produtos";
import { DetalhesOfertasPage } from "../detalhes-ofertas/detalhes-ofertas";
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, viewCtrl, ofertaProvider, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.ofertaProvider = ofertaProvider;
        this.navParams = navParams;
        this.ofertas = [];
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        this.getAllOfertas();
    };
    InicioPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    InicioPage.prototype.getAllOfertas = function () {
        var _this = this;
        var revendedor_id = JSON.parse(localStorage.getItem('user'))['id'];
        this.ofertaProvider.getOfertasToRevendedor(revendedor_id).subscribe(function (response) {
            console.log(response);
            _this.ofertas = response['ofertas'];
        }, function (error) {
            console.log(error);
        });
    };
    InicioPage.prototype.goToInteresses = function () {
        this.navCtrl.push(MeusProdutosPage);
    };
    InicioPage.prototype.getData = function (data) {
        return new Date(data);
    };
    InicioPage.prototype.goToDetalhesOferta = function (oferta) {
        this.navCtrl.push(DetalhesOfertasPage, { oferta: oferta });
    };
    InicioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-inicio',
            templateUrl: 'inicio.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, OfertasProvider, NavParams])
    ], InicioPage);
    return InicioPage;
}());
export { InicioPage };
//# sourceMappingURL=inicio.js.map