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
import { ProcurasProvider } from "../../../providers/procuras/procuras";
/**
 * Generated class for the DisponibilidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisponibilidadePage = /** @class */ (function () {
    function DisponibilidadePage(navCtrl, navParams, procuraController, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.procuraController = procuraController;
        this.alertController = alertController;
        this.produtores = [];
        this.requisicao = this.navParams.get('requisicao');
    }
    DisponibilidadePage.prototype.ionViewDidLoad = function () {
        this.getProdutores(this.requisicao.procura.id);
    };
    DisponibilidadePage.prototype.ionViewWillLoad = function () {
    };
    DisponibilidadePage.prototype.getLetrasIniciais = function (nome) {
        var nomes = nome.split(' ');
        return nomes[0].charAt(0) + nomes[nomes.length - 1].charAt(0);
    };
    DisponibilidadePage.prototype.getProdutores = function (requisicao_id) {
        var _this = this;
        this.procuraController.getProdutores(requisicao_id).subscribe(function (response) {
            _this.produtores = response.produtores;
            console.log(response);
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.saveOrUpdate = _this.salvarOrActualizar();
        });
    };
    DisponibilidadePage.prototype.alertDisponibilidade = function (saveOrUpadade) {
        var _this = this;
        this.alertController.create({
            title: 'Disponibilidade',
            inputs: [
                {
                    name: 'quantidade',
                    placeholder: 'Quantidade',
                    type: 'number'
                },
                {
                    name: 'preco',
                    placeholder: 'Preço',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                },
                {
                    text: 'SALVAR',
                    handler: function (dados) {
                        var disponibilidade = {
                            procuras_id: _this.requisicao.procura.id,
                            produtores_id: JSON.parse(localStorage.getItem('user')).id,
                            preco: dados.preco,
                            quantidade: dados.quantidade
                        };
                        if (saveOrUpadade == 'salvar')
                            _this.salvarDisponibilidade(disponibilidade);
                        else
                            _this.actualizarDisponibilidade(disponibilidade);
                    }
                }
            ]
        }).present();
    };
    DisponibilidadePage.prototype.salvarDisponibilidade = function (dados) {
        var _this = this;
        this.procuraController.salvarDisponibilidade(dados).subscribe(function (response) {
            console.log(response);
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.getProdutores(_this.requisicao.procura.id);
        });
    };
    DisponibilidadePage.prototype.actualizarDisponibilidade = function (dados) {
        var _this = this;
        var disponivilidade_id = this.getDisponibilidade_id(dados.produtores_id);
        this.procuraController.actualizarDisponibilidade(dados, disponivilidade_id).subscribe(function (response) {
            console.log(response);
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.getProdutores(_this.requisicao.procura.id);
        });
    };
    /**
     * Verifica se o produtor Logado ja fez alguma disponibilizacao de produtos
     *
     */
    DisponibilidadePage.prototype.salvarOrActualizar = function () {
        var produtor_id = JSON.parse(localStorage.getItem('user')).id;
        for (var _i = 0, _a = this.produtores; _i < _a.length; _i++) {
            var produtor = _a[_i];
            if (produtor.id == produtor_id)
                return false;
        }
        return true;
    };
    DisponibilidadePage.prototype.getDisponibilidade_id = function (produtor_id) {
        for (var _i = 0, _a = this.produtores; _i < _a.length; _i++) {
            var produtor = _a[_i];
            if (produtor.id == produtor_id)
                return produtor.pivot.id;
        }
        return 0;
    };
    DisponibilidadePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-disponibilidade',
            templateUrl: 'disponibilidade.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProcurasProvider,
            AlertController])
    ], DisponibilidadePage);
    return DisponibilidadePage;
}());
export { DisponibilidadePage };
//# sourceMappingURL=disponibilidade.js.map