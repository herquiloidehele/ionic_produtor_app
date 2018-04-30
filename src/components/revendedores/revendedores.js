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
var RevendedoresComponent = /** @class */ (function () {
    function RevendedoresComponent() {
    }
    RevendedoresComponent.prototype.getLetrasIniciais = function (nome) {
        var nomes = nome.split(' ');
        return nomes[0].charAt(0) + nomes[nomes.length - 1].charAt(0);
    };
    __decorate([
        Input('revendedor'),
        __metadata("design:type", Object)
    ], RevendedoresComponent.prototype, "revendedor", void 0);
    RevendedoresComponent = __decorate([
        Component({
            selector: 'revendedores',
            templateUrl: 'revendedores.html'
        }),
        __metadata("design:paramtypes", [])
    ], RevendedoresComponent);
    return RevendedoresComponent;
}());
export { RevendedoresComponent };
//# sourceMappingURL=revendedores.js.map