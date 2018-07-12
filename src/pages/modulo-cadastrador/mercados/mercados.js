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
import { MercadoProvider } from "../../../providers/mercado/mercado";
import { RegistarMercadosPage } from "../cadastros/registar-mercados/registar-mercados";
/**
 * Generated class for the MercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MercadosPage = /** @class */ (function () {
    function MercadosPage(navCtrl, navParams, mercadoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mercadoProvider = mercadoProvider;
        this.mercados = [];
    }
    MercadosPage.prototype.onClickAdicionarMercado = function () {
        this.navCtrl.push(RegistarMercadosPage);
    };
    MercadosPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    MercadosPage.prototype.ionViewDidLoad = function () {
        this.getAll();
    };
    MercadosPage.prototype.getAll = function () {
        var _this = this;
        this.mercadoProvider.getAll().subscribe(function (resultado) {
            _this.mercados = resultado['mercados'];
            console.log(resultado);
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Busca de Mercados Terminada');
        });
    };
    MercadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mercados',
            templateUrl: 'mercados.html',
            entryComponents: [RegistarMercadosPage]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, MercadoProvider])
    ], MercadosPage);
    return MercadosPage;
}());
export { MercadosPage };
//# sourceMappingURL=mercados.js.map