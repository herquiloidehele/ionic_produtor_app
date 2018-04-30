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
import { ProdutoresPage } from "../produtores/produtores";
import { ProdutosPage } from "../produtos/produtos";
import { MercadosPage } from "../mercados/mercados";
import { RevendedoresPage } from "../revendedores/revendedores";
import { AlertController, NavController, NavParams } from "ionic-angular";
var TabsPage = /** @class */ (function () {
    function TabsPage(navControl, alertController, navParam) {
        this.navControl = navControl;
        this.alertController = alertController;
        this.navParam = navParam;
        this.tab1Root = ProdutosPage;
        this.tab2Root = MercadosPage;
        this.tab3Root = ProdutoresPage;
        this.tab4Root = RevendedoresPage;
    }
    TabsPage = __decorate([
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map