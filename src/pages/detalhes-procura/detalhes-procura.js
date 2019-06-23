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
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
import { RevendedorProfilePage } from "../revendedor-profile/revendedor-profile";
import { ProcurasProvider } from "../../providers/procuras/procuras";
/**
 * Generated class for the DetalhesProcuraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesProcuraPage = /** @class */ (function () {
    function DetalhesProcuraPage(urlApi, procuraProvicer, navCtrl, navParams, actionSheetController) {
        this.urlApi = urlApi;
        this.procuraProvicer = procuraProvicer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.loader = true;
    }
    DetalhesProcuraPage_1 = DetalhesProcuraPage;
    DetalhesProcuraPage.prototype.ionViewDidLoad = function () {
        this.getProcura();
    };
    DetalhesProcuraPage.prototype.getProcura = function () {
        var _this = this;
        this.procuraProvicer.get(this.navParams.get('procura_id')).subscribe(function (response) {
            _this.procura = response['procura'];
            _this.getProcurasSemelhantes(_this.procura);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loader = false;
        });
    };
    DetalhesProcuraPage.prototype.goPerfilRevendedor = function (revendedor) {
        this.navCtrl.push(RevendedorProfilePage, { revendedor_id: revendedor.id });
    };
    DetalhesProcuraPage.prototype.getProcurasSemelhantes = function (procura) {
        var _this = this;
        this.procuraProvicer.getProcurasSemelhantes(procura['id']).subscribe(function (response) {
            _this.procurasSemelhantes = response['procuras'];
        }, function (error) {
            console.log(error);
        });
    };
    DetalhesProcuraPage.prototype.goDetalhesProcura = function (procura) {
        this.navCtrl.push(DetalhesProcuraPage_1, { procura_id: procura.id });
    };
    DetalhesProcuraPage.prototype.showAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Pretende contactar Via?',
                            buttons: [
                                {
                                    text: "CHAMADA",
                                    icon: 'call',
                                    handler: function () {
                                        console.log("Contacto via chamada");
                                    }
                                },
                                {
                                    text: "SMS",
                                    icon: 'ios-mail',
                                    handler: function () {
                                        console.log('contacto via SMS');
                                    },
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalhesProcuraPage = DetalhesProcuraPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-detalhes-procura',
            templateUrl: 'detalhes-procura.html',
        }),
        __metadata("design:paramtypes", [UrlapiProvider,
            ProcurasProvider,
            NavController,
            NavParams,
            ActionSheetController])
    ], DetalhesProcuraPage);
    return DetalhesProcuraPage;
    var DetalhesProcuraPage_1;
}());
export { DetalhesProcuraPage };
//# sourceMappingURL=detalhes-procura.js.map