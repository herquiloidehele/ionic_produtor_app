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
import { AlertController, IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { TabsPage } from "../modulo-cadastrador/tabs/tabs";
import { ProdutosrequsitadosPage } from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import { MenuProvider } from "../../providers/menu/menu";
import { InicioPage } from "../modulo-revendedor/inicio/inicio";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, autenticacaoService, menuProvider, alertController, popOverController, urlprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticacaoService = autenticacaoService;
        this.menuProvider = menuProvider;
        this.alertController = alertController;
        this.popOverController = popOverController;
        this.urlprovider = urlprovider;
        this.user = {
            username: null,
            password: null,
        };
    }
    LoginPage.prototype.presentPopover = function (event) {
        this.popOverController.create(PopoverPage, { servers: this.urlprovider.getURLs() }).present({ ev: event });
    };
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
            switch (erro.status) {
                case 0:
                    _this.mostrarAlert('Servidor Indisponivel', 'Ligue o servidor para ter acesso a aplicação');
                    break;
                case 401:
                    _this.mostrarAlert('Credenciais Erradas');
                    break;
                case 422:
                    _this.mostrarAlert('Dados Invalidos', 'Verifique os dados Inseridos');
                    break;
                default: _this.mostrarAlert('Ocorreu um erro Inesperado', 'Volte a tentar mais tarde');
            }
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
    LoginPage.prototype.mostrarAlert = function (titulo, messagem) {
        if (messagem === void 0) { messagem = null; }
        this.alertController.create({
            title: titulo,
            message: messagem,
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
            AlertController,
            PopoverController,
            UrlapiProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl, navparams, urlApiProvider) {
        this.viewCtrl = viewCtrl;
        this.navparams = navparams;
        this.urlApiProvider = urlApiProvider;
        this.servers = [];
        this.servers = navparams.data.servers;
    }
    PopoverPage.prototype.isUrlActive = function (urlItem) {
        var url = localStorage.getItem('server');
        return url == urlItem;
    };
    PopoverPage.prototype.close = function (url) {
        console.log(url);
        this.urlApiProvider.selectUrl(url);
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Component({
            template: "\n    <ion-list no-lines >\n      <ion-list-header>Servidores</ion-list-header>\n      <div *ngFor=\"let server of servers\">\n        <ion-item *ngIf=\"server.status\">\n\n          <ion-label>{{server.nome}}</ion-label>\n          <ion-radio  (click)=\"close(server.url)\" checked=\"{{isUrlActive(server.url)}}\" value=\"{{server.url}}\"></ion-radio>\n          \n        </ion-item>\n      </div>\n      \n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [ViewController, NavParams, UrlapiProvider])
    ], PopoverPage);
    return PopoverPage;
}());
export { PopoverPage };
//# sourceMappingURL=login.js.map