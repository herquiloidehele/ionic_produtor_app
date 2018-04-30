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
var RegistarUnidadesMedidasPage = /** @class */ (function () {
    function RegistarUnidadesMedidasPage(navCtrl, navParams, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.unidadeMedidas = [{ designacao: 'Quilogama', abreviatura: "KG" }, { designacao: "Saco", abreviatura: 'SC' }, { designacao: "Tonelada", abreviatura: "Ton" }];
    }
    RegistarUnidadesMedidasPage.prototype.onClickAdicionar = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Adicionar Categoria',
            inputs: [
                {
                    name: 'designacao',
                    placeholder: 'Unidade de Medida'
                },
                {
                    name: 'abreviatura',
                    placeholder: 'Avbreviatura'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (dados) {
                        console.log('Cacelado');
                    },
                },
                {
                    text: 'Salvar',
                    handler: function (dados) {
                        _this.unidadeMedidas.push(dados);
                    }
                }
            ],
        });
        alert.present();
    };
    RegistarUnidadesMedidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistarUnidadesMedidasPage');
    };
    RegistarUnidadesMedidasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-unidades-medidas',
            templateUrl: 'registar-unidades-medidas.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], RegistarUnidadesMedidasPage);
    return RegistarUnidadesMedidasPage;
}());
export { RegistarUnidadesMedidasPage };
//# sourceMappingURL=registar-unidades-medidas.js.map