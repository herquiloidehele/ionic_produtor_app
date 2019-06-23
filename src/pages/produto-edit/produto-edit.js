var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
import { UnidadeMedidaProvider } from "../../providers/unidade-medida/unidade-medida";
import { ProduzProvider } from "../../providers/produz/produz";
var ProdutoEditPage = /** @class */ (function () {
    function ProdutoEditPage(navCtrl, alertController, navParams, urlProvider, unidadeMedidaProvider, produzProvider) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.urlProvider = urlProvider;
        this.unidadeMedidaProvider = unidadeMedidaProvider;
        this.produzProvider = produzProvider;
        this.produto = {};
        this.showDescription = false;
        this.showQuantidade = false;
        this.showEpoca = false;
        this.unidadesMedidas = [];
        this.quantidade = {
            unidades_medidas_id: '',
            quantidade: ''
        };
        this.epocas = [];
        this.epoca = {
            inicio: '',
            fim: ''
        };
        this.produtoInfo = {
            descricao: null,
            quantidade: null,
            unidadeMedida: null,
            epocas: []
        };
        this.meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        this.produto = this.navParams.get('produto');
        console.log(this.produto);
    }
    ProdutoEditPage.prototype.ionViewDidLoad = function () {
        this.getProduzInfo();
    };
    ProdutoEditPage.prototype.getUnidadesMedida = function () {
        var _this = this;
        this.unidadeMedidaProvider.getAll().subscribe(function (response) {
            console.log(response);
            _this.unidadesMedidas = response['unidades_medidas'];
        }, function (error) {
            console.log(error);
        });
    };
    ProdutoEditPage.prototype.getProduzInfo = function () {
        var _this = this;
        this.produzProvider.getProduz(this.produto['pivot']['id']).subscribe(function (responseList) {
            var response1 = responseList[0];
            var response2 = responseList[1];
            console.log(responseList);
            _this.produtoInfo.quantidade = response1['produz']['quantidade'];
            _this.produtoInfo.descricao = response1['produz']['descricao'];
            _this.produtoInfo.unidadeMedida = response1['produz']['unidades_medida'];
            _this.produtoInfo.epocas = response2['epocas'];
        }, function (error) {
            console.log(error);
        }, function () {
            _this.getUnidadesMedida();
        });
    };
    ProdutoEditPage.prototype.togleQuantidade = function () {
        this.showQuantidade = !this.showQuantidade;
    };
    ProdutoEditPage.prototype.togleDescription = function () {
        this.showDescription = !this.showDescription;
    };
    ProdutoEditPage.prototype.togleEpoca = function () {
        this.showEpoca = !this.showEpoca;
    };
    ProdutoEditPage.prototype.setUnidadeMedida = function (unidade) {
        console.log(unidade);
        this.quantidade.unidades_medidas_id = unidade.id;
    };
    ProdutoEditPage.prototype.setEpocaInicio = function (epoca) {
        this.epoca.inicio = epoca;
    };
    ProdutoEditPage.prototype.setEpocaFim = function (epoca) {
        this.epoca.fim = epoca;
    };
    ProdutoEditPage.prototype.salvarDescricao = function () {
        var _this = this;
        if (this.descricao != null) {
            this.produzProvider.updateProduz(this.produto['pivot']['id'], { descricao: this.descricao }).subscribe(function (response) {
                console.log(response);
                _this.produtoInfo.descricao = response['produz']['descricao'];
                _this.togleDescription();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.showMessage("Descrição inválida", "Verifique se adicionou uma descrição válida");
        }
    };
    ProdutoEditPage.prototype.salvarQuantidade = function () {
        var _this = this;
        if ((this.quantidade.quantidade != null && this.quantidade.unidades_medidas_id != null) && (this.quantidade.quantidade != '' && this.quantidade.unidades_medidas_id != '')) {
            this.produzProvider.updateProduz(this.produto['pivot']['id'], this.quantidade).subscribe(function (response) {
                console.log(response);
                _this.produtoInfo.quantidade = response['produz']['quantidade'];
                _this.produtoInfo.unidadeMedida = response['produz']['unidades_medida'];
                _this.togleQuantidade();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.showMessage('Quantidades Invalidas', 'Verifique se colocou correctamente os valores');
        }
    };
    ProdutoEditPage.prototype.salvarEpocas = function () {
        var _this = this;
        this.epocas = [];
        this.epocas.push(this.epoca);
        if (this.epocas.length > 0 && this.isEpocaValida(this.epoca.inicio, this.epoca.fim)) {
            this.produzProvider.salvarEpocas(this.produto['pivot']['id'], this.epocas).subscribe(function (response) {
                console.log(response);
                _this.produtoInfo.epocas = response['epocas'];
                _this.togleEpoca();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.showMessage('Época Inválida', 'Verifique se colocou correctamente os meses');
        }
    };
    ProdutoEditPage.prototype.isEpocaValida = function (inicio, fim) {
        var epocaInicio = this.meses.indexOf(inicio);
        var epocaFim = this.meses.indexOf(fim);
        if (epocaInicio >= 0 && epocaFim >= 0)
            return epocaFim > epocaInicio;
        else
            return false;
    };
    ProdutoEditPage.prototype.showMessage = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var aletrer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            'title': title,
                            'message': message,
                            buttons: ['ok']
                        })];
                    case 1:
                        aletrer = _a.sent();
                        aletrer.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProdutoEditPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produto-edit',
            templateUrl: 'produto-edit.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            NavParams,
            UrlapiProvider,
            UnidadeMedidaProvider,
            ProduzProvider])
    ], ProdutoEditPage);
    return ProdutoEditPage;
}());
export { ProdutoEditPage };
//# sourceMappingURL=produto-edit.js.map