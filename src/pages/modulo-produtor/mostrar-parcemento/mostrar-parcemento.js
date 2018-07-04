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
import { DisponibilizarProdutosPage } from "../disponibilizar-produtos/disponibilizar-produtos";
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
        this.resto = null;
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
                        var restoParcelamento = totalConvertido % parcelamento.quantidade;
                        _this.parcelas = [];
                        _this.resto = null;
                        for (var parcela = 1; parcela <= numeroParcelas; parcela++) {
                            _this.parcelas.push({ quantidade: dados.quantidade, unidade_medida: unidade_medida, preco: dados.preco });
                        }
                        if (restoParcelamento > 0) {
                            _this.resto = { quantidade: restoParcelamento, unidade_medida: unidade_medida, preco: null };
                        }
                    }
                }
            ]
        }).present();
    };
    /**
     * metdo que adiciona um preco para o resto
     * @param resto
     */
    MostrarParcementoPage.prototype.adicionarResto = function (resto) {
        var _this = this;
        this.alertController.create({
            title: 'Resto',
            message: 'Preço do Resto',
            inputs: [{ name: 'preco', placeholder: 'Preço' }],
            buttons: [{ text: 'Cancelar' }, { text: 'SALVAR', handler: function (dados) {
                        _this.parcelas.push({ quantidade: resto.quantidade, unidade_medida: resto.unidade_medida, preco: dados.preco });
                        _this.resto = null;
                    } }]
        }).present();
    };
    MostrarParcementoPage.prototype.limparParcelas = function () {
        this.resto = null;
        this.parcelas = [];
    };
    MostrarParcementoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    MostrarParcementoPage.prototype.salvarOferta = function () {
        var _this = this;
        var produtor_id = JSON.parse(localStorage.getItem('user'))['id'];
        console.log(this.oferta);
        this.ofertaProvider.salvarOferta(this.oferta, produtor_id).subscribe(function (response) {
            console.log(response);
            _this.salvarOfertaParcelada(response['oferta']['id']);
        }, function (error) {
            console.log(error);
        });
    };
    MostrarParcementoPage.prototype.salvarOfertaParcelada = function (oferta_id) {
        var _this = this;
        this.ofertaProvider.salvarOfertaParcelada(oferta_id, this.parcelas).subscribe(function (response) {
            console.log(response);
            _this.navCtrl.push(DisponibilizarProdutosPage);
        }, function (error) {
            console.log(error);
        });
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