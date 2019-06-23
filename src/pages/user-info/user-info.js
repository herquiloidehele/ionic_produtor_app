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
import { LocalizacaoPage } from "../localizacao/localizacao";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { FormGroup, Validators, FormControl } from "@angular/forms";
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, navParams, loadingController, authProvider, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.authProvider = authProvider;
        this.alertController = alertController;
        this.user = {
            nome: '',
            username: ''
        };
        this.start = 0;
        this.vadacaoForm();
    }
    UserInfoPage.prototype.onNext = function () {
        if (this.start > 0)
            this.goToLocalizacaoPage();
        else {
            this.start += 1;
        }
        console.log(this.start);
    };
    UserInfoPage.prototype.goToLocalizacaoPage = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Aguarde' });
        loading.present();
        this.authProvider.verifyNumber(this.user.username).subscribe(function (response) {
            loading.dismiss();
            console.log(response);
            if (response['result'] == true) {
                _this.showMessage('Aviso', 'Outro Prdutor está a user esse numero, Use outro Numero');
            }
            else {
                _this.navCtrl.push(LocalizacaoPage, { user: _this.user });
            }
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.showMessage('Erro', 'Verifique a sua internet, Tente Novamente');
        }, function () {
        });
    };
    UserInfoPage.prototype.validacaoNome = function (control) {
        var nomes = control.value.trim().split(" ");
        if (!(nomes.length > 1))
            return { "nome": true };
        return null;
    };
    UserInfoPage.prototype.showMessage = function (title, message) {
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
    UserInfoPage.prototype.onKeyUp = function () {
        this.start = 0;
    };
    UserInfoPage.prototype.vadacaoForm = function () {
        this.formGroup = new FormGroup({
            nome: new FormControl('', [this.validacaoNome, Validators.maxLength(40), Validators.minLength(5), Validators.required]),
            username: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)])
        });
    };
    UserInfoPage.prototype.validarForm = function (formGroup) {
        console.log(this.start);
        if (this.start == 0)
            return formGroup.controls.nome.valid;
        else
            return formGroup.controls.username.valid;
    };
    UserInfoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-info',
            templateUrl: 'user-info.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            AutenticacaoProvider,
            AlertController])
    ], UserInfoPage);
    return UserInfoPage;
}());
export { UserInfoPage };
//# sourceMappingURL=user-info.js.map