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
import { PerfilPrivadoPage } from "../pages/perfil-privado/perfil-privado";
import { Storage } from "@ionic/storage";
import { StartPage } from "../pages/start/start";
import { PaginaPrincipalPage } from "../pages/pagina-principal/pagina-principal";
import { ProdutosListPage } from "../pages/produtos-list/produtos-list";
import { RevendedoresListPage } from "../pages/revendedores-list/revendedores-list";
import { ProdutoresListPage } from "../pages/produtores-list/produtores-list";
import { ProdutoresProvider } from "../providers/produtores/produtores";
var MyApp = /** @class */ (function () {
    function MyApp(platform, app, storageController, alertController, produtorProvider) {
        this.platform = platform;
        this.storageController = storageController;
        this.alertController = alertController;
        this.produtorProvider = produtorProvider;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () {
                app.navPop();
            });
        });
        this.redirectUser();
        // this.rootPage = LocalizacaoPage;
        this.menu = [
            { icon: 'ios-contacts', pageName: 'Produtores', page: ProdutoresListPage },
            { icon: 'ios-people', pageName: 'Revendedores', page: RevendedoresListPage },
            { icon: 'ios-leaf', pageName: 'Produtos', page: ProdutosListPage },
            { icon: 'ios-person', pageName: 'Meu Perfil', page: PerfilPrivadoPage }
        ];
    }
    MyApp.prototype.redirectUser = function () {
        var _this = this;
        this.storageController.get('user').then(function (response) {
            console.log({ storage: response });
            if (response) {
                _this.user = response;
                _this.updateUserData(_this.user['id']);
                _this.rootPage = PaginaPrincipalPage;
            }
            else {
                _this.rootPage = StartPage;
            }
        }).catch(function (error) {
            console.log(error);
            _this.rootPage = StartPage;
        });
    };
    MyApp.prototype.showPageProdutor = function (page) {
        this.ionNav.push(page, { showBackButton: true });
    };
    MyApp.prototype.updateUserData = function (id) {
        var _this = this;
        this.produtorProvider.getProdutor(id).subscribe(function (response) {
            console.log(response['produtor']);
            if (response['produtor'] && response['produtor'] && null || response['produtor'] != 'undefined' && response['produtor'] != undefined) {
                console.log("dentro");
                _this.storageController.set('user', response['produtor']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.alertController.create({
            title: "Sair da Aplicação",
            message: "Tem a certeza que quer sair da aplicação?",
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        console.log("Saindo");
                        _this.storageController.clear();
                        _this.ionNav.setRoot(StartPage);
                    }
                },
                {
                    text: "NãO",
                }
            ]
        }).present();
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "ionNav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            App,
            Storage,
            AlertController,
            ProdutoresProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map