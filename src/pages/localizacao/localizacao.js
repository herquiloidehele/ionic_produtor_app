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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JsonProvider } from "../../providers/json/json";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EscolherProdutoPage } from "../escolher-produto/escolher-produto";
var LocalizacaoPage = /** @class */ (function () {
    function LocalizacaoPage(navCtrl, navParams, jsonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jsonProvider = jsonProvider;
        this.localizacao = {
            provincia: {},
            distrito: {}
        };
        this.user = {};
        this.provincias = [];
        this.distritos = [];
        this.getProvincias();
        this.initializeValidators();
    }
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
    };
    LocalizacaoPage.prototype.getProvincias = function () {
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
    LocalizacaoPage.prototype.getDistritos = function () {
        var _this = this;
        this.jsonProvider.getProvincias().subscribe(function (response) {
            _this.provincias = response['places'];
            console.log(_this.provincias);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('Complete Provinces');
        });
    };
    LocalizacaoPage.prototype.onSelectProvincias = function (provincia) {
        this.localizacao.provincia = provincia;
        this.distritos = provincia['distritos'];
    };
    LocalizacaoPage.prototype.onSelectDistritos = function (distrito) {
        this.localizacao.distrito = distrito;
    };
    LocalizacaoPage.prototype.onClickProvincia = function () {
        this.start = 0;
    };
    LocalizacaoPage.prototype.initializeValidators = function () {
        this.formGroup = new FormGroup({
            provincia: new FormControl('', Validators.required),
            distrito: new FormControl('', Validators.required)
        });
    };
    LocalizacaoPage.prototype.validarForm = function () {
        if (this.start == 0)
            return this.formGroup.controls.provincia.valid;
        else
            return this.formGroup.controls.distrito.valid;
    };
    LocalizacaoPage.prototype.onNext = function () {
        if (this.start > 0) {
            console.log(this.localizacao.distrito);
            this.user['distrito_id'] = this.localizacao['distrito']['id'];
            this.navCtrl.push(EscolherProdutoPage, { user: this.user });
        }
        this.start += 1;
    };
    LocalizacaoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-localizacao',
            templateUrl: 'localizacao.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, JsonProvider])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());
export { LocalizacaoPage };
//# sourceMappingURL=localizacao.js.map