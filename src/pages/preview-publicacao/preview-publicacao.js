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
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { OfertasProvider } from "../../providers/ofertas/ofertas";
import { Storage } from "@ionic/storage";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
var PreviewPublicacaoPage = /** @class */ (function () {
    function PreviewPublicacaoPage(navCtrl, navParams, ofertasProvider, alertController, loadingController, urlApiProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ofertasProvider = ofertasProvider;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.urlApiProvider = urlApiProvider;
        this.storage = storage;
    }
    PreviewPublicacaoPage.prototype.ionViewDidLoad = function () {
        this.publicacao = this.navParams.get('publicacao');
    };
    PreviewPublicacaoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    PreviewPublicacaoPage.prototype.publicar = function () {
        var _this = this;
        var novaPublicacao = this.transformPublicacao(this.publicacao);
        console.log({ novaPublicacao: novaPublicacao });
        var loading = this.loadingController.create({ content: 'Publicando' });
        loading.present();
        this.ofertasProvider.salvarOferta(novaPublicacao).subscribe(function (response) {
            console.log(response);
            _this.actualizarProdutos(_this.publicacao.produtos_id);
            loading.dismiss();
            _this.navCtrl.popToRoot();
        }, function (error) {
            loading.dismiss();
            _this.showAlert("Erro ao Publicar", "Ocorreu algum erro ao Submeter \n Verifique a sua Internet");
            console.log(error);
        });
    };
    PreviewPublicacaoPage.prototype.actualizarProdutos = function (produto) {
        var _this = this;
        console.log(produto);
        this.storage.get('user').then(function (user) {
            var produtoFilter = user.produtos_produzidos.filter(function (produzidos) {
                return produzidos['id'] == produto['id'];
            });
            if (produtoFilter.length == 0) {
                user.produtos_produzidos.push(produto);
                _this.storage.set('user', user).then(function (response) {
                    console.log("Produto adicionado");
                });
            }
            else {
                console.log("o produto ja faz parte");
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    PreviewPublicacaoPage.prototype.transformPublicacao = function (publicacao) {
        return {
            designacao: publicacao.designacao,
            descricao: publicacao.descricao,
            preco: publicacao.preco,
            quantidade: publicacao.quantidade,
            unidades_medidas_id: publicacao.unidades_medidas_id['id'],
            produtos_id: publicacao.produtos_id['id'],
            distritos_id: publicacao.distritos_id['id'],
            produtores_id: publicacao.produtores_id,
            is_preco_unidade: publicacao.is_preco_unidade
        };
    };
    PreviewPublicacaoPage.prototype.showAlert = function (titulo, mensagem) {
        this.alertController.create({ message: mensagem, title: titulo, buttons: ['ok'] }).present();
    };
    PreviewPublicacaoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-preview-publicacao',
            templateUrl: 'preview-publicacao.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            OfertasProvider,
            AlertController,
            LoadingController,
            UrlapiProvider,
            Storage])
    ], PreviewPublicacaoPage);
    return PreviewPublicacaoPage;
}());
export { PreviewPublicacaoPage };
//# sourceMappingURL=preview-publicacao.js.map