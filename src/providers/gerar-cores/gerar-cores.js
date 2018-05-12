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
import { of } from "rxjs/observable/of";
/*
  Generated class for the GerarCoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GerarCoresProvider = /** @class */ (function () {
    function GerarCoresProvider() {
        this.cores = ['#E874D8', '#00FF01', '#0013FE', '#00A3FF', '#01FFE5', '#FF6201', '#3CB371', '#1E90FF', '#FF1493', '#ad4330', '#590293'];
    }
    /**
     * getra um  numero aleatorio e escolhe uma core no array
     * @returns {String}
     */
    GerarCoresProvider.prototype.getColor = function () {
        var minimo = Math.ceil(0);
        var maximo = Math.floor(this.cores.length);
        var aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        return of(this.cores[aleatorio]);
    };
    GerarCoresProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], GerarCoresProvider);
    return GerarCoresProvider;
}());
export { GerarCoresProvider };
//# sourceMappingURL=gerar-cores.js.map