var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlapiProvider } from "../urlapi/urlapi";
var UserProvider = /** @class */ (function () {
    function UserProvider(http, urlAPi) {
        this.http = http;
        this.urlAPi = urlAPi;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    UserProvider.prototype.createAccount = function (user) {
        return this.http.post(this.urlAPi.getURL() + 'users/produtor', { user: user }, { headers: this.headers });
    };
    UserProvider.prototype.updateUser = function (userData, id) {
        return this.http.put(this.urlAPi.getURL() + 'users/' + id, userData, { headers: this.headers });
    };
    UserProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UrlapiProvider])
    ], UserProvider);
    return UserProvider;
}());
export { UserProvider };
//# sourceMappingURL=user.js.map