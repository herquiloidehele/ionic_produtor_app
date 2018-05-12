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
import { ProduzProvider } from "../../../providers/produz/produz";
import { ProdutosProvider } from "../../../providers/produtos/produtos";
import { RegistarMeusProdutosPage } from "../registar-meus-produtos/registar-meus-produtos";
/**
 * Generated class for the ProdutosDisponibilizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosDisponibilizadosPage = /** @class */ (function () {
    function ProdutosDisponibilizadosPage(navCtrl, navParams, viewController, produzProvider, produtosProvider, navController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.produzProvider = produzProvider;
        this.produtosProvider = produtosProvider;
        this.navController = navController;
    }
    ProdutosDisponibilizadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosDisponibilizadosPage');
    };
    ProdutosDisponibilizadosPage.prototype.ionViewWillEnter = function () {
        // this.viewController.showBackButton(false);
        this.getAllProdutos();
    };
    ProdutosDisponibilizadosPage.prototype.getMeusProdutos = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.produzProvider.getMeusProdutos(user.id).subscribe(function (response) {
            console.log(response);
            _this.meusProdutos = response.produz;
        }, function (erros) {
            console.log(erros);
        });
    };
    ProdutosDisponibilizadosPage.prototype.getAllProdutos = function () {
        var _this = this;
        this.produtosProvider.getAll().subscribe(function (response) {
            console.log(response['produtos']);
            _this.produtos = response['produtos'];
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.getMeusProdutos();
        });
    };
    ProdutosDisponibilizadosPage.prototype.adicionarProdutos = function () {
        this.navController.push(RegistarMeusProdutosPage, { produtos: this.produtos });
    };
    ProdutosDisponibilizadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtos-disponibilizados',
            templateUrl: 'produtos-disponibilizados.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            ProduzProvider,
            ProdutosProvider,
            NavController])
    ], ProdutosDisponibilizadosPage);
    return ProdutosDisponibilizadosPage;
}());
export { ProdutosDisponibilizadosPage };
//# sourceMappingURL=produtos-disponibilizados.js.map