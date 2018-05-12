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
import { ProdutosProvider } from "../../../providers/produtos/produtos";
import { UnidadeMedidaProvider } from "../../../providers/unidade-medida/unidade-medida";
import { OfertasProvider } from "../../../providers/ofertas/ofertas";
/**
 * Generated class for the RegistarProdutosDisponibilizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistarProdutosDisponibilizadosPage = /** @class */ (function () {
    function RegistarProdutosDisponibilizadosPage(navCtrl, navParams, alertController, produtodProvider, uniadesMedidasProvider, ofertasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.produtodProvider = produtodProvider;
        this.uniadesMedidasProvider = uniadesMedidasProvider;
        this.ofertasProvider = ofertasProvider;
        this.oferta = {
            produto: null,
            preco: null,
            quantidade: null,
            unidades_medidas: null,
            data_fim: null
        };
        this.getProdutos();
        this.getUnidadesMedidas();
    }
    RegistarProdutosDisponibilizadosPage.prototype.getProdutos = function () {
        var _this = this;
        this.produtodProvider.getAll().subscribe(function (response) {
            _this.produtos = response['produtos'];
        }, function (erros) {
            console.log(erros);
        });
    };
    RegistarProdutosDisponibilizadosPage.prototype.getUnidadesMedidas = function () {
        var _this = this;
        this.uniadesMedidasProvider.getAll().subscribe(function (response) {
            _this.unidades_medidas = response['unidades_medidas'];
        }, function (erros) {
            console.log(erros);
        });
    };
    RegistarProdutosDisponibilizadosPage.prototype.itemSelected = function (atributo) {
        var _this = this;
        var alert = this.alertController.create();
        switch (atributo) {
            case 'produto':
                {
                    alert.setTitle('Selecione um Produto');
                    for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
                        var produto = _a[_i];
                        alert.addInput({
                            type: 'radio',
                            label: produto.designacao,
                            value: produto,
                        });
                    }
                    alert.addButton({ text: 'CANCEL' });
                    alert.addButton({
                        text: 'SALVAR',
                        handler: function (dados) {
                            if (!dados)
                                return false;
                            else
                                _this.oferta.produto = dados;
                        }
                    });
                }
                break;
            case 'unidadeMedida':
                {
                    alert.setTitle('Unidade de Medida');
                    for (var _b = 0, _c = this.unidades_medidas; _b < _c.length; _b++) {
                        var unidadeMedida = _c[_b];
                        alert.addInput({
                            type: 'radio',
                            label: unidadeMedida.designacao,
                            value: unidadeMedida
                        });
                    }
                    alert.addButton({ text: 'CANCEL' });
                    alert.addButton({
                        text: 'SALVAR',
                        handler: function (dados) {
                            if (!dados)
                                return false;
                            else
                                _this.oferta.unidades_medidas = dados;
                        }
                    });
                }
                break;
            case 'quantidade':
                {
                    alert.setTitle('Introduza a Quantidade');
                    alert.addInput({
                        name: 'quantidade',
                        placeholder: 'Quantidade'
                    });
                    alert.addButton({ text: 'CANCEL' });
                    alert.addButton({
                        text: 'SALVAR',
                        handler: function (dados) {
                            if (!dados)
                                return false;
                            else
                                _this.oferta.quantidade = dados.quantidade;
                        }
                    });
                }
                break;
            case 'preco':
                {
                    alert.setTitle('Introduza o Preco');
                    alert.addInput({
                        name: 'preco',
                        placeholder: 'Preco'
                    });
                    alert.addButton({ text: 'CANCEL' });
                    alert.addButton({
                        text: 'SALVAR',
                        handler: function (dados) {
                            if (!dados)
                                return false;
                            else
                                _this.oferta.preco = dados.preco;
                        }
                    });
                }
                break;
            case 'data_fim':
                {
                    alert.setTitle('Introduza o data Limite');
                    alert.addInput({
                        name: 'data_fim',
                        placeholder: 'data limite'
                    });
                    alert.addButton({ text: 'CANCEL' });
                    alert.addButton({
                        text: 'SALVAR',
                        handler: function (dados) {
                            if (!dados)
                                return false;
                            else
                                _this.oferta.data_fim = dados.data_fim;
                        }
                    });
                }
                break;
        }
        alert.present();
    };
    RegistarProdutosDisponibilizadosPage.prototype.canGoBack = function () {
        return false;
    };
    RegistarProdutosDisponibilizadosPage.prototype.salvar = function () {
        var _this = this;
        var produtor_id = JSON.parse(localStorage.getItem('user'))['id'];
        console.log(produtor_id);
        this.ofertasProvider.salvarOferta(this.oferta, produtor_id).subscribe(function (response) {
            console.log(response);
            _this.navCtrl.pop();
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Requisicao Terminada');
        });
    };
    RegistarProdutosDisponibilizadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-produtos-disponibilizados',
            templateUrl: 'registar-produtos-disponibilizados.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            ProdutosProvider,
            UnidadeMedidaProvider,
            OfertasProvider])
    ], RegistarProdutosDisponibilizadosPage);
    return RegistarProdutosDisponibilizadosPage;
}());
export { RegistarProdutosDisponibilizadosPage };
//# sourceMappingURL=registar-produtos-disponibilizados.js.map