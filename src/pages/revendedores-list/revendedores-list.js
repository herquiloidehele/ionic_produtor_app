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
import { RevendedorProvider } from "../../providers/revendedor/revendedor";
import { RevendedorProfilePage } from "../revendedor-profile/revendedor-profile";
/**
 * Generated class for the RevendedoresListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevendedoresListPage = /** @class */ (function () {
    function RevendedoresListPage(navCtrl, navParams, revendedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.revendedorProvider = revendedorProvider;
        this.revendedores = [];
        this.revendedoresCopy = [];
        this.loader = true;
    }
    RevendedoresListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.revendedorProvider.getAll().subscribe(function (response) {
            _this.revendedores = response['revendedores'];
            _this.revendedoresCopy = response['revendedores'];
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loader = false;
        });
    };
    RevendedoresListPage.prototype.onInput = function (event) {
        this.revendedores = this.revendedoresCopy;
        if (event.target.value.trim() != '' || event.target.value.trim() != null)
            this.revendedores = this.revendedores.filter(function (revendedor) {
                return (revendedor['user']['nome'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
                    (revendedor['mercado']['distrito']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
                    (revendedor['mercado']['distrito']['provincia']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
            });
    };
    RevendedoresListPage.prototype.viewProfile = function (revendedor) {
        this.navCtrl.push(RevendedorProfilePage, { revendedor_id: revendedor.id });
    };
    RevendedoresListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-revendedores-list',
            templateUrl: 'revendedores-list.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RevendedorProvider])
    ], RevendedoresListPage);
    return RevendedoresListPage;
}());
export { RevendedoresListPage };
//# sourceMappingURL=revendedores-list.js.map