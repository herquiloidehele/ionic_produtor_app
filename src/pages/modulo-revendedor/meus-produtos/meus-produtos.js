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
import { ProdutosProvider } from "../../../providers/produtos/produtos";
import { RegistarInteressesPage } from "../registar-interesses/registar-interesses";
import { InteresseProvider } from "../../../providers/interesse/interesse";
/**
 * Generated class for the MeusProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusProdutosPage = /** @class */ (function () {
    function MeusProdutosPage(navCtrl, navParams, viewController, interesseProvider, produtosProvider, navController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.interesseProvider = interesseProvider;
        this.produtosProvider = produtosProvider;
        this.navController = navController;
    }
    MeusProdutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosDisponibilizadosPage');
    };
    MeusProdutosPage.prototype.ionViewWillEnter = function () {
        // this.viewController.showBackButton(false);
        this.getAllProdutos();
    };
    MeusProdutosPage.prototype.getMeusProdutos = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.interesseProvider.getMeusProdutos(user.id).subscribe(function (response) {
            console.log(response);
            _this.meusProdutos = response['interesse'];
        }, function (erros) {
            console.log(erros);
        });
    };
    MeusProdutosPage.prototype.getAllProdutos = function () {
        // this.produtosProvider.getAll().subscribe(
        //   (response) => {
        //     console.log(response['produtos']);
        //     this.produtos =  response['produtos'];
        //   },
        //   (erros) => {
        //     console.log(erros);
        //   },
        //   () => {
        //     this.getMeusProdutos();
        //   }
        //
        // );
    };
    MeusProdutosPage.prototype.adicionarProdutos = function () {
        this.navController.push(RegistarInteressesPage, { produtos: this.produtos });
    };
    MeusProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-meus-produtos',
            templateUrl: 'meus-produtos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            InteresseProvider,
            ProdutosProvider,
            NavController])
    ], MeusProdutosPage);
    return MeusProdutosPage;
}());
export { MeusProdutosPage };
//# sourceMappingURL=meus-produtos.js.map