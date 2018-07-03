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
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { TabsPage } from "../modulo-cadastrador/tabs/tabs";
import { ProdutosrequsitadosPage } from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import { VariaveisGlobaisProvider } from "../../providers/variaveis-globais/variaveis-globais";
import { MenuProvider } from "../../providers/menu/menu";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, autenticacaoService, variaveisGlobais, menuProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticacaoService = autenticacaoService;
        this.variaveisGlobais = variaveisGlobais;
        this.menuProvider = menuProvider;
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
            alert('Credenciais erradas');
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
            // MyApp.setRootPage(TabsPage);
            // MyApp.rootPage = TabsPage;
            this.navCtrl.setRoot(TabsPage, { tipoUser: tipoUser, user: user });
        }
        if (tipoUser == 'Produtor') {
            // MyApp.setRootPage(ProdutosrequsitadosPage);
            // MyApp.rootPage = ProdutosrequsitadosPage;
            this.navCtrl.setRoot(ProdutosrequsitadosPage, { tipoUser: tipoUser, user: user });
        }
        if (tipoUser == 'Revendedor') {
            alert('Paginao do Revendedor ainda nao esta Pronta.');
            console.log('Revendedor');
        }
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
            VariaveisGlobaisProvider,
            MenuProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map