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
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { AdicionarProdutosPage } from "../adicionar-produtos/adicionar-produtos";
import { ProdutosProvider } from "../../providers/produtos/produtos";
import { ProdutoEditPage } from "../produto-edit/produto-edit";
import { UserProvider } from "../../providers/user/user";
import { ProdutoresProvider } from "../../providers/produtores/produtores";
import { JsonProvider } from "../../providers/json/json";
var PerfilPrivadoPage = /** @class */ (function () {
    function PerfilPrivadoPage(navCtrl, navParams, storageController, alertController, modalCtr, userProvider, produtorProvider, loadingController, produtosController, jsonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageController = storageController;
        this.alertController = alertController;
        this.modalCtr = modalCtr;
        this.userProvider = userProvider;
        this.produtorProvider = produtorProvider;
        this.loadingController = loadingController;
        this.produtosController = produtosController;
        this.jsonProvider = jsonProvider;
        this.showBackButton = false;
        this.provincias = [];
        this.distritos = [];
        this.showBackButton = this.navParams.get('showBackButton');
    }
    PerfilPrivadoPage.prototype.ionViewWillEnter = function () {
        this.getuserFromStorage();
    };
    PerfilPrivadoPage.prototype.getProvincias = function () {
        var _this = this;
        this.jsonProvider.getProvincias().subscribe(function (response) {
            _this.provincias = response['provincias'];
            console.log(_this.provincias);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('Complete Provinces');
        });
    };
    PerfilPrivadoPage.prototype.openAlertProvincias = function () {
        var _this = this;
        var alert = this.alertController.create({
            subTitle: "Selecione a Província",
            buttons: [
                {
                    text: "CANCEL"
                },
                {
                    text: "OK",
                    handler: function (provincia) {
                        console.log(provincia);
                        _this.openAlertDistritos(provincia.distritos);
                    }
                }
            ]
        });
        for (var _i = 0, _a = this.provincias; _i < _a.length; _i++) {
            var provincia = _a[_i];
            alert.addInput({ name: "provincia", type: "radio", label: provincia.designacao, value: provincia });
        }
        alert.present();
    };
    PerfilPrivadoPage.prototype.openAlertDistritos = function (distritos) {
        var _this = this;
        var alert = this.alertController.create({
            subTitle: "Selecione o Distrito",
            buttons: [
                {
                    text: "CANCEL"
                },
                {
                    text: "OK",
                    handler: function (distrito) {
                        console.log(distrito);
                        _this.updateUserDistritos({ distritos_id: distrito.id }, _this.user.user.id, distrito);
                    }
                }
            ]
        });
        for (var _i = 0, distritos_1 = distritos; _i < distritos_1.length; _i++) {
            var distrito = distritos_1[_i];
            alert.addInput({ name: "distrito", type: "radio", label: distrito.designacao, value: distrito });
        }
        alert.present();
    };
    PerfilPrivadoPage.prototype.openAlert = function (name, title, placeholder) {
        var _this = this;
        this.alertController.create({
            subTitle: title,
            inputs: [{
                    name: name,
                    placeholder: placeholder
                }
            ],
            buttons: [
                {
                    text: "CANCEL",
                },
                {
                    text: "SALVAR",
                    handler: function (dados) {
                        console.log(dados);
                        if (name == 'nome')
                            _this.updateUserName(dados, _this.user.user.id);
                        if (name == 'username')
                            _this.updateUserPhone(dados, _this.user.user.id);
                    }
                }
            ]
        }).present();
    };
    PerfilPrivadoPage.prototype.updateUserDistritos = function (produtorData, id, distrito) {
        var _this = this;
        console.log(produtorData);
        var loading = this.loadingController.create({ content: 'Aguarde' });
        loading.present();
        this.produtorProvider.update(produtorData, id).subscribe(function (response) {
            console.log(response);
            _this.user.distrito = distrito;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        }, function () { });
    };
    PerfilPrivadoPage.prototype.updateUserName = function (userData, id) {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Aguarde' });
        loading.present();
        this.userProvider.updateUser(userData, id).subscribe(function (response) {
            console.log(response);
            _this.user.user.nome = userData.nome;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        }, function () { });
    };
    PerfilPrivadoPage.prototype.updateUserPhone = function (userData, id) {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Aguarde' });
        loading.present();
        this.userProvider.updateUser(userData, id).subscribe(function (response) {
            console.log(response);
            _this.user.telefone = userData.username;
            _this.user.user.username = userData.username;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        }, function () { });
    };
    PerfilPrivadoPage.prototype.getuserFromStorage = function () {
        var _this = this;
        this.storageController.get('user').then(function (response) {
            console.log({ storage: response });
            _this.user = response;
            _this.getProdutos();
        }).catch(function (error) {
            console.log(error);
            _this.showErrorAlert();
        });
    };
    PerfilPrivadoPage.prototype.showErrorAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            'title': 'Erro',
                            'message': 'Não foi possivel carregar os dados do utilizador, Feche e volte a abrir a aplicação',
                            buttons: ['ok']
                        });
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPrivadoPage.prototype.getImagesCount = function () {
        var quantidade = 0;
        if (this.user['ofertas'].length == 0)
            return 0;
        else {
            this.user['ofertas'].forEach(function (oferta) {
                oferta['imagens'].forEach(function (imagem) {
                    quantidade++;
                });
            });
            return quantidade;
        }
    };
    PerfilPrivadoPage.prototype.gotToAdicionar = function () {
        var _this = this;
        var modalControler = this.modalCtr.create(AdicionarProdutosPage, { produtos: this.produtos, produtos_produzidos: this.user['produtos_produzidos'] });
        modalControler.present();
        modalControler.onDidDismiss(function (produto) {
            _this.produtosController.adicionarProdutosProduzidos(_this.user.id, produto.id).subscribe(function (response) {
                _this.user['produtos_produzidos'].push(produto);
                _this.storageController.set('user', _this.user);
            }, function (error) {
                console.log(error);
            });
        });
    };
    PerfilPrivadoPage.prototype.goToProditoEdit = function (produto) {
        console.log(produto);
        this.navCtrl.push(ProdutoEditPage, { produto: produto });
    };
    PerfilPrivadoPage.prototype.getProdutos = function () {
        var _this = this;
        this.produtosController.getAllProdutos(this.user['produtos_produzidos']).subscribe(function (response) {
            _this.produtos = response['produtos'];
            console.log((_this.produtos));
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.getProvincias();
        });
    };
    PerfilPrivadoPage.prototype.mostrarAlert = function () {
        if (this.user['user']['estado'] == 0) {
            var alert_1 = this.alertController.create({
                'title': 'Mensagem',
                'message': 'A sua conta ainda nao está activa. \n Aguarde até que a sua conta seja activada',
                buttons: ['ok']
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertController.create({
                'title': 'Mensagem',
                'message': 'Tem a certeza que deseja desactivar a conta?',
                buttons: [{
                        text: 'Não',
                        handler: function (value) {
                            console.log(value);
                        }
                    },
                    {
                        text: 'SIM',
                        handler: function (value) {
                            console.log(value);
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    PerfilPrivadoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    PerfilPrivadoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-perfil-privado',
            templateUrl: 'perfil-privado.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Storage,
            AlertController,
            ModalController,
            UserProvider,
            ProdutoresProvider,
            LoadingController,
            ProdutosProvider,
            JsonProvider])
    ], PerfilPrivadoPage);
    return PerfilPrivadoPage;
}());
export { PerfilPrivadoPage };
//# sourceMappingURL=perfil-privado.js.map