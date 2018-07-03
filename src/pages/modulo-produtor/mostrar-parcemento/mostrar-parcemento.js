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
import { OfertasProvider } from "../../../providers/ofertas/ofertas";
import { ConversorProvider } from "../../../providers/conversor/conversor";
/**
 * Generated class for the MostrarParcementoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostrarParcementoPage = /** @class */ (function () {
    function MostrarParcementoPage(navCtrl, navParams, ofertaProvider, alertController, conversorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ofertaProvider = ofertaProvider;
        this.alertController = alertController;
        this.conversorProvider = conversorProvider;
        this.parcelas = [];
        this.parcelamento_diferente = false;
    }
    MostrarParcementoPage.prototype.ionViewWillLoad = function () {
        this.oferta = this.navParams.get('oferta');
        console.log(this.oferta);
    };
    MostrarParcementoPage.prototype.ionViewDidLoad = function () {
    };
    MostrarParcementoPage.prototype.alertPartesIguais1 = function () {
        var _this = this;
        var unitConvestions = this.conversorProvider.getUnitConversions(this.oferta.unidades_medidas.designacao);
        if (unitConvestions.length > 1) {
            var alertUnidadesMedidas = this.alertController.create();
            alertUnidadesMedidas.setTitle('Unidade de Medida');
            alertUnidadesMedidas.setMessage('Em que Unidade de Medida deseja Parcelar?');
            for (var _i = 0, unitConvestions_1 = unitConvestions; _i < unitConvestions_1.length; _i++) {
                var unidade = unitConvestions_1[_i];
                alertUnidadesMedidas.addInput({
                    type: 'radio',
                    label: unidade.designacao,
                    value: unidade
                });
            }
            alertUnidadesMedidas.addButton({ text: 'cancelar' });
            alertUnidadesMedidas.addButton({ text: 'SALVAR', handler: function (dados) {
                    console.log(dados);
                    _this.alertPartesIguais2(dados);
                } });
            alertUnidadesMedidas.present();
        }
        else
            this.alertPartesIguais2(this.oferta.unidades_medidas);
    };
    MostrarParcementoPage.prototype.alertPartesIguais2 = function (unidade_medida) {
        var _this = this;
        this.alertController.create({
            title: 'Parcelar em Partes Iguas',
            message: 'Quantidade e preço para cada parcela',
            inputs: [
                { name: 'quantidade', placeholder: 'Quantidade' },
                { name: 'preco', placeholder: 'Preço' }
            ],
            buttons: [{ text: 'cancelar' },
                {
                    text: 'SALVAR', handler: function (dados) {
                        console.log(dados);
                        var parcelamento = {
                            from: _this.oferta.unidades_medidas.designacao,
                            to: unidade_medida.designacao,
                            quantidade: dados.quantidade,
                            preco: dados.preco
                        };
                        var totalConvertido = _this.conversorProvider.converter(parcelamento.from, parcelamento.to, _this.oferta.quantidade);
                        var numeroParcelas = (totalConvertido / parcelamento.quantidade) | 0;
                    }
                }
            ]
        }).present();
    };
    MostrarParcementoPage.prototype.criarParcelamento = function (parcelamento) {
        // let razaoConversao = this.conversorProvider.getRazaoConversao(this.oferta.unidades_medidas.designacao, parcelamento.unidades_medida.designacao);
        // console.log(razaoConversao);
        // let quantidade = this.conversorProvider.converter(dados.);
        // let parcelas =
    };
    MostrarParcementoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mostrar-parcemento',
            templateUrl: 'mostrar-parcemento.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            OfertasProvider,
            AlertController,
            ConversorProvider])
    ], MostrarParcementoPage);
    return MostrarParcementoPage;
}());
export { MostrarParcementoPage };
//# sourceMappingURL=mostrar-parcemento.js.map