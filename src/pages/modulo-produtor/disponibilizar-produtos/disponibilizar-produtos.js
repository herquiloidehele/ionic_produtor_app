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
import { RegistarProdutosDisponibilizadosPage } from "../registar-produtos-disponibilizados/registar-produtos-disponibilizados";
/**
 * Generated class for the DisponibilizarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisponibilizarProdutosPage = /** @class */ (function () {
    function DisponibilizarProdutosPage(navCtrl, navParams, viewCtrl, ofertasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.ofertasProvider = ofertasProvider;
        this.ofertas = [];
        this.corBarra = [];
        this.cores = ['#E874D8', '#00FF01', '#0013FE', '#00A3FF', '#FF6201', '#3CB371', '#1E90FF', '#FF1493', '#ad4330', '#590293', '#ED5A79'];
    }
    DisponibilizarProdutosPage.prototype.ionViewDidLoad = function () {
        this.getMinhasOfertas();
    };
    DisponibilizarProdutosPage.prototype.ionViewDidEnter = function () {
        this.getMinhasOfertas();
    };
    DisponibilizarProdutosPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    DisponibilizarProdutosPage.prototype.getMinhasOfertas = function () {
        var _this = this;
        var provider_id = JSON.parse(localStorage.getItem('user'))['id'];
        this.ofertasProvider.getMinhasOfertas(provider_id).subscribe(function (response) {
            _this.ofertas = response['ofertas'];
            console.log(_this.ofertas);
            for (var a = 1; a <= _this.ofertas.length; a++) {
                _this.corBarra.push(_this.gerarCores());
            }
            console.log(_this.corBarra);
        }, function (erros) {
            console.log(erros);
        }, function () { console.log('busca de ofertas terminada com sucesso'); });
    };
    DisponibilizarProdutosPage.prototype.gerarCores = function () {
        var minimo = Math.ceil(0);
        var maximo = Math.floor(this.cores.length);
        var aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        return this.cores[aleatorio];
    };
    DisponibilizarProdutosPage.prototype.getData = function (data) {
        return new Date(data);
    };
    DisponibilizarProdutosPage.prototype.adicionarProdutos = function () {
        this.navCtrl.push(RegistarProdutosDisponibilizadosPage);
    };
    DisponibilizarProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-disponibilizar-produtos',
            templateUrl: 'disponibilizar-produtos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            OfertasProvider])
    ], DisponibilizarProdutosPage);
    return DisponibilizarProdutosPage;
}());
export { DisponibilizarProdutosPage };
//# sourceMappingURL=disponibilizar-produtos.js.map