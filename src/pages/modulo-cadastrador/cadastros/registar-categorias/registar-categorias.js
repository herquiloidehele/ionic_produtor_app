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
/**
 * Generated class for the RegistarCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistarCategoriasPage = /** @class */ (function () {
    function RegistarCategoriasPage(navCtrl, navParams, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.categorias = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4",];
    }
    RegistarCategoriasPage.prototype.onClickAdicionar = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Adicionar Categoria',
            inputs: [{
                    name: 'categoria',
                    placeholder: 'Categoria'
                }],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (dados) {
                        console.log('Cacelado');
                    },
                },
                {
                    text: 'Salvar',
                    handler: function (categoriaAdicionada) {
                        _this.categorias.push(categoriaAdicionada.categoria);
                    }
                }
            ],
        });
        alert.present();
    };
    RegistarCategoriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistarCategoriasPage');
    };
    RegistarCategoriasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-categorias',
            templateUrl: 'registar-categorias.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], RegistarCategoriasPage);
    return RegistarCategoriasPage;
}());
export { RegistarCategoriasPage };
//# sourceMappingURL=registar-categorias.js.map