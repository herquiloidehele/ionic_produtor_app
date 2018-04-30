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
import { ProcurasProvider } from "../../../providers/procuras/procuras";
/**
 * Generated class for the ProdutosrequsitadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosrequsitadosPage = /** @class */ (function () {
    function ProdutosrequsitadosPage(navControl, navParams, viewCtrl, procuraProvider) {
        this.navControl = navControl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.procuraProvider = procuraProvider;
        this.getProdutosRequisitados();
    }
    ProdutosrequsitadosPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ProdutosrequsitadosPage.prototype.ionViewDidLoad = function () {
    };
    ProdutosrequsitadosPage.prototype.getProdutosRequisitados = function () {
        var _this = this;
        this.procuraProvider.getAll().subscribe(function (response) {
            console.log(response);
            _this.produtosRequisitados = response;
        }, function (erros) {
            console.log(erros);
        });
    };
    ProdutosrequsitadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtosrequsitados',
            templateUrl: 'produtosrequsitados.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            ProcurasProvider])
    ], ProdutosrequsitadosPage);
    return ProdutosrequsitadosPage;
}());
export { ProdutosrequsitadosPage };
//# sourceMappingURL=produtosrequsitados.js.map