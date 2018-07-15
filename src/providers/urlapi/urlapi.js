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
        this.urls = ['http://127.0.0.1:8000/api/', 'http://34.217.126.220/api/'];
        this.selectedURL = this.urls[0];
    }
    // public getUrl(){
    //
    //   let resultado =  await this.httpClient.get(this.urls[0] + 'api-test').toPromise()
    //       .then((sucesso) => {
    //         return sucesso;
    //       })
    //       .catch((erro) =>{
    //       return erro;
    //     });
    //
    //
    //     if(resultado.response){
    //       this.selectedURL = this.urls[0];
    //       return this.selectedURL;
    //     } else{
    //       this.selectedURL = this.urls[1];
    //       return this.selectedURL;
    //     }
    //
    // }
    UrlapiProvider.prototype.getUrl = function () {
        return this.selectedURL;
    };
    UrlapiProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], UrlapiProvider);
    return UrlapiProvider;
}());
export { UrlapiProvider };
//# sourceMappingURL=urlapi.js.map