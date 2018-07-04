var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { AutenticacaoProvider } from "../providers/autenticacao/autenticacao";
import { TabsPage } from "../pages/modulo-cadastrador/tabs/tabs";
import { ProdutosrequsitadosPage } from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import { DisponibilizarProdutosPage } from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import { ProdutosDisponibilizadosPage } from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import { PerfilPage } from "../pages/perfil/perfil";
import { MenuProvider } from "../providers/menu/menu";
import { InicioPage } from "../pages/modulo-revendedor/inicio/inicio";
import { RequisitarProdutosPage } from "../pages/modulo-revendedor/requisitar-produtos/requisitar-produtos";
import { MeusProdutosPage } from "../pages/modulo-revendedor/meus-produtos/meus-produtos";
import { PerfilRevendedorPage } from "../pages/modulo-revendedor/perfil-revendedor/perfil-revendedor";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, autenticacaoProvider, alertController, menuProvider, app) {
        this.autenticacaoProvider = autenticacaoProvider;
        this.alertController = alertController;
        this.menuProvider = menuProvider;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () {
                app.navPop();
            });
        });
        this.menuPaginasProdutor = [
            { icon: 'home', pageName: 'Produtos Requisitados', page: ProdutosrequsitadosPage },
            { icon: 'send', pageName: 'Disponibilizar Produtos', page: DisponibilizarProdutosPage },
            { icon: 'leaf', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage },
            { icon: 'person', pageName: 'Meu Perfil', page: PerfilPage }
        ];
        this.menuPaginasCadastrador = [
            { icon: 'leaf', pageName: 'Produtos', page: ProdutosrequsitadosPage },
            { icon: 'person', pageName: 'Produtores', page: DisponibilizarProdutosPage },
            { icon: 'person', pageName: 'Revendedores', page: ProdutosDisponibilizadosPage },
            { icon: 'person', pageName: 'Meu Perfil', page: PerfilPage }
        ];
        this.menuPaginasRevendedor = [
            { icon: 'home', pageName: 'Inicio', page: InicioPage },
            { icon: 'send', pageName: 'Requisitar Produtos', page: RequisitarProdutosPage },
            { icon: 'leaf', pageName: 'Meus Produtos', page: MeusProdutosPage },
            { icon: 'person', pageName: 'Meu Perfil', page: PerfilRevendedorPage }
        ];
        this.getUserData();
        this.getPage();
    }
    MyApp.prototype.getPage = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            this.autenticacaoProvider.getUserFromToken(token).subscribe(function (response) {
                console.log(response);
                _this.user = response.user;
                if (response.tipo_user == 'Cadastrador')
                    _this.rootPage = TabsPage;
                if (response.tipo_user == 'Produtor')
                    _this.rootPage = ProdutosrequsitadosPage;
                if (response.tipo_user == 'Revendedor')
                    _this.rootPage = InicioPage;
            }, function (erros) {
                localStorage.removeItem('token');
                _this.rootPage = LoginPage;
            });
        }
        else {
            console.log('Nao existe Token Ainda');
            this.rootPage = LoginPage;
        }
    };
    MyApp.prototype.showPageProdutor = function (page) {
        this.ionNav.setRoot(page);
    };
    MyApp.prototype.getUserData = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            this.autenticacaoProvider.getUserFromToken(token).subscribe(function (response) {
                _this.user = response['user'];
                _this.menuProvider.setTipoUser(response['tipo_user']);
                _this.menuProvider.setShowMenu(true);
            }, function (erros) {
                console.log(erros);
            }, function () {
                console.log('getUserData completed');
            });
        }
        else {
            console.log('Nao existe Token Ainda');
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        var prompt = this.alertController.create({
            title: 'Sair',
            message: 'Deseja Sair da Aplicacao?',
            buttons: [
                {
                    text: 'NÃO',
                    handler: function (dados) {
                        console.log('Canecelado');
                    }
                },
                {
                    text: 'SIM',
                    handler: function (dados) {
                        _this.sair(token);
                    }
                }
            ],
        });
        prompt.present();
    };
    MyApp.prototype.sair = function (token) {
        var _this = this;
        this.autenticacaoProvider.logout(token).subscribe(function (resultado) {
            if (resultado['logout'] == true) {
                _this.ionNav.setRoot(LoginPage);
                localStorage.removeItem('token');
                _this.menuProvider.setShowMenu(false);
                _this.menuProvider.setTipoUser('');
            }
            else
                alert('Ocorreu algum erro no logout');
        }, function (erros) {
            console.log(erros);
        });
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "ionNav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen,
            AutenticacaoProvider,
            AlertController,
            MenuProvider,
            App])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map