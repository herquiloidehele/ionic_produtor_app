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
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
import { ProdutoresProvider } from "../../providers/produtores/produtores";
import { PerfilPublicoPage } from "../perfil-publico/perfil-publico";
/**
 * Generated class for the ProdutoresListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoresListPage = /** @class */ (function () {
    function ProdutoresListPage(navCtrl, navParams, urlApi, produtorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.urlApi = urlApi;
        this.produtorProvider = produtorProvider;
        this.produtores = [];
        this.produtoresCopy = [];
        this.loader = true;
    }
    ProdutoresListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.produtorProvider.getAll().subscribe(function (response) {
            _this.produtores = response['produtores'];
            _this.produtoresCopy = response['produtores'];
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loader = false;
        });
    };
    ProdutoresListPage.prototype.goToProfile = function (produtor_id) {
        this.navCtrl.push(PerfilPublicoPage, { produtor_id: produtor_id });
    };
    ProdutoresListPage.prototype.onInput = function (event) {
        this.produtores = this.produtoresCopy;
        if (event.target.value.trim() != '' || event.target.value.trim() != null)
            this.produtores = this.produtores.filter(function (produtor) {
                return (produtor['user']['nome'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
                    (produtor['distrito']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
                    (produtor['distrito']['provincia']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
            });
    };
    ProdutoresListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtores-list',
            templateUrl: 'produtores-list.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            UrlapiProvider,
            ProdutoresProvider])
    ], ProdutoresListPage);
    return ProdutoresListPage;
}());
export { ProdutoresListPage };
//# sourceMappingURL=produtores-list.js.map