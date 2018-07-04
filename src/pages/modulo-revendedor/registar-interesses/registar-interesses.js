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
import { UnidadeMedidaProvider } from "../../../providers/unidade-medida/unidade-medida";
import { ProduzProvider } from "../../../providers/produz/produz";
/**
 * Generated class for the RegistarInteressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistarInteressesPage = /** @class */ (function () {
    function RegistarInteressesPage(navCtrl, navParams, viewController, unidadeMedidaProvider, produzProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.unidadeMedidaProvider = unidadeMedidaProvider;
        this.produzProvider = produzProvider;
        this.produtos = this.navParams.get('produtos');
        console.log(this.produtos);
        this.getAllUnidadeMedida();
    }
    RegistarInteressesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistarMeusProdutosPage');
    };
    RegistarInteressesPage.prototype.ionViewWillEnter = function () {
        this.viewController.showBackButton(false);
    };
    RegistarInteressesPage.prototype.getAllUnidadeMedida = function () {
        var _this = this;
        this.unidadeMedidaProvider.getAll().subscribe(function (response) {
            _this.unidadeMedidas = response.unidades_medidas;
        }, function (erros) {
            console.log(erros);
        });
    };
    RegistarInteressesPage.prototype.salvarProduto = function () {
        var _this = this;
        var produz = {
            produtores_id: JSON.parse(localStorage.getItem('user')).id,
            produtos_id: this.produto,
            unidades_medidas_id: this.unidadeMedida,
            quantidade_media: this.quantidade,
        };
        console.log(produz);
        this.produzProvider.salvarProduz(produz).subscribe(function (response) {
            console.log(response);
            _this.navCtrl.pop();
        }, function (erros) {
            console.log(erros);
        });
    };
    RegistarInteressesPage.prototype.habilitarSave = function () {
        return this.produto != 'undefined' && this.unidadeMedida != 'undefined' && this.quantidade != 'undefined';
    };
    RegistarInteressesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-interesses',
            templateUrl: 'registar-interesses.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            UnidadeMedidaProvider,
            ProduzProvider])
    ], RegistarInteressesPage);
    return RegistarInteressesPage;
}());
export { RegistarInteressesPage };
//# sourceMappingURL=registar-interesses.js.map