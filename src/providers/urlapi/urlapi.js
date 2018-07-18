var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UrlapiProvider = /** @class */ (function () {
    function UrlapiProvider() {
        this.urls = [
            { nome: 'Local', url: 'http://127.0.0.1:8000/api/', status: true },
            { nome: 'Centos Server', url: 'http://34.217.126.220/api/', status: false },
            { nome: 'Ubuntu Server', url: 'http://54.218.58.191/api/', status: true }
        ];
    }
    UrlapiProvider.prototype.getURLs = function () {
        return this.urls;
    };
    UrlapiProvider.prototype.selectUrl = function (url) {
        localStorage.setItem('server', url);
        this.selectedURL = url;
    };
    UrlapiProvider.prototype.getUrl = function () {
        var server = localStorage.getItem('server');
        return server;
    };
    UrlapiProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], UrlapiProvider);
    return UrlapiProvider;
}());
export { UrlapiProvider };
//# sourceMappingURL=urlapi.js.map