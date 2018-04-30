var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
/**
 * Generated class for the ProdutoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProdutoresComponent = /** @class */ (function () {
    function ProdutoresComponent() {
    }
    ProdutoresComponent.prototype.getLetrasIniciais = function (nome) {
        var nomes = nome.split(' ');
        return nomes[0].charAt(0) + nomes[nomes.length - 1].charAt(0);
    };
    __decorate([
        Input('produtor'),
        __metadata("design:type", Object)
    ], ProdutoresComponent.prototype, "produtor", void 0);
    ProdutoresComponent = __decorate([
        Component({
            selector: 'produtores',
            templateUrl: 'produtores.html'
        }),
        __metadata("design:paramtypes", [])
    ], ProdutoresComponent);
    return ProdutoresComponent;
}());
export { ProdutoresComponent };
//# sourceMappingURL=produtores.js.map