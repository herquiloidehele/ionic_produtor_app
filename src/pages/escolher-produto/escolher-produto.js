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
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage } from "../pagina-principal/pagina-principal";
import { UserProvider } from "../../providers/user/user";
import { Storage } from "@ionic/storage";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
import { ProdutosProvider } from "../../providers/produtos/produtos";
var EscolherProdutoPage = /** @class */ (function () {
    function EscolherProdutoPage(navCtrl, navParams, userProvider, produtosProvider, loadingController, alertController, storageController, urlApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.produtosProvider = produtosProvider;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.storageController = storageController;
        this.urlApi = urlApi;
        this.produtos = [];
        this.chekboxIds = [];
        this.user = {};
        this.loader = true;
    }
    EscolherProdutoPage.prototype.ionViewDidLoad = function () {
        this.getProdutos();
        this.user = this.navParams.get('user');
    };
    EscolherProdutoPage.prototype.getProdutos = function () {
        var _this = this;
        this.produtosProvider.getAll().subscribe(function (response) {
            _this.produtos = response['produtos'];
            console.log(_this.produtos);
        }, function (error) { console.log(error); }, function () {
            _this.loader = false;
        });
    };
    EscolherProdutoPage.prototype.getIMG = function (categoria) {
        switch (categoria) {
            case 'Frutas': return '../../assets/icon/categorias/fruits3.svg';
            case 'Legumes': return '../../assets/icon/categorias/legumes2.svg';
            case 'Verduras': return '../../assets/icon/categorias/vegetables3.svg';
            case 'Grãos e Cereais': return '../../assets/icon/categorias/cereals2.svg';
            default: return '';
        }
    };
    EscolherProdutoPage.prototype.check = function (idCheck) {
        if (this.isChecked(idCheck))
            this.chekboxIds.splice(this.chekboxIds.indexOf(idCheck), 1);
        else
            this.chekboxIds.push(idCheck);
        console.log(this.chekboxIds);
    };
    EscolherProdutoPage.prototype.isChecked = function (idCheck) {
        return this.chekboxIds.indexOf(idCheck) != -1;
    };
    EscolherProdutoPage.prototype.onClickProximo = function () {
        this.user['interesses'] = this.chekboxIds.map(function (chekbox) {
            return chekbox.substr(3);
        });
        console.log(this.user);
        this.createAccount(this.user);
    };
    EscolherProdutoPage.prototype.createAccount = function (user) {
        var _this = this;
        var loading = this.loadingController.create({ content: "Finalizando" });
        loading.present();
        this.userProvider.createAccount(user).subscribe(function (response) {
            console.log({ server: response });
            _this.saveUserDataOnDevice(response['user'], loading);
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.showErrorAlert();
        });
    };
    EscolherProdutoPage.prototype.saveUserDataOnDevice = function (user, loading) {
        var _this = this;
        this.storageController.set('user', user).then(function (response) {
            loading.dismiss();
            _this.navCtrl.push(PaginaPrincipalPage, { user: user, tabIndex: 0 });
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
            _this.showErrorAlert();
        });
    };
    EscolherProdutoPage.prototype.showErrorAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            'title': 'Erro',
                            'message': 'Verifique a sua conexao a internet, e tente novamente',
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
    EscolherProdutoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-escolher-produto',
            templateUrl: 'escolher-produto.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            UserProvider,
            ProdutosProvider,
            LoadingController,
            AlertController,
            Storage,
            UrlapiProvider])
    ], EscolherProdutoPage);
    return EscolherProdutoPage;
}());
export { EscolherProdutoPage };
//# sourceMappingURL=escolher-produto.js.map