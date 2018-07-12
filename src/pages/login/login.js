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
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { TabsPage } from "../modulo-cadastrador/tabs/tabs";
import { ProdutosrequsitadosPage } from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import { MenuProvider } from "../../providers/menu/menu";
import { InicioPage } from "../modulo-revendedor/inicio/inicio";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, autenticacaoService, menuProvider, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticacaoService = autenticacaoService;
        this.menuProvider = menuProvider;
        this.alertController = alertController;
        this.user = {
            username: null,
            password: null,
        };
    }
    LoginPage.prototype.onSignIn = function () {
        var _this = this;
        var user = { username: this.user.username, password: this.user.password };
        this.autenticacaoService.login(user).subscribe(function (resultado) {
            localStorage.setItem('user', JSON.stringify(resultado.user));
            localStorage.setItem('token', resultado.token);
            _this.menuProvider.setTipoUser(resultado.tipo_user);
            _this.menuProvider.setShowMenu(true);
            console.log(resultado.user);
            _this.redirecionarUser(resultado.tipo_user, resultado.user);
        }, function (erro) {
            _this.mostrarAlert(erro.error.message);
            console.log(erro);
        }, function () {
            console.log('Completo');
        });
    };
    LoginPage.prototype.onPasswordForget = function () {
        console.log('Forget Password');
    };
    LoginPage.prototype.redirecionarUser = function (tipoUser, user) {
        if (tipoUser == 'Cadastrador') {
            this.navCtrl.setRoot(TabsPage, { tipoUser: tipoUser, user: user });
        }
        if (tipoUser == 'Produtor') {
            this.navCtrl.setRoot(ProdutosrequsitadosPage, { tipoUser: tipoUser, user: user });
        }
        if (tipoUser == 'Revendedor') {
            this.navCtrl.setRoot(InicioPage, { tipoUser: tipoUser, user: user });
        }
    };
    LoginPage.prototype.mostrarAlert = function (messagem) {
        this.alertController.create({
            title: messagem,
            buttons: [{
                    text: 'OK',
                }]
        }).present();
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AutenticacaoProvider,
            MenuProvider,
            AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map