var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadoDetailsPage } from './mercado-details';
var MercadoDetailsPageModule = /** @class */ (function () {
    function MercadoDetailsPageModule() {
    }
    MercadoDetailsPageModule = __decorate([
        NgModule({
            declarations: [
                MercadoDetailsPage,
            ],
            imports: [
                IonicPageModule.forChild(MercadoDetailsPage),
            ],
        })
    ], MercadoDetailsPageModule);
    return MercadoDetailsPageModule;
}());
export { MercadoDetailsPageModule };
//# sourceMappingURL=mercado-details.module.js.map