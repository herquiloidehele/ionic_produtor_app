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
import { PerfilPrivadoPage } from "../perfil-privado/perfil-privado";
import { PublicacoesPage } from "../publicacoes/publicacoes";
import { MercadoPage } from "../mercado/mercado";
import { ProcurasPage } from "../procuras/procuras";
var PaginaPrincipalPage = /** @class */ (function () {
    function PaginaPrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = PerfilPrivadoPage;
        this.tab2 = PublicacoesPage;
        this.tab3 = MercadoPage;
        this.tab4 = ProcurasPage;
        this.tabIndex = this.navParams.get('tabIndex');
    }
    PaginaPrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PaginaPrincipalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pagina-principal',
            templateUrl: 'pagina-principal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PaginaPrincipalPage);
    return PaginaPrincipalPage;
}());
export { PaginaPrincipalPage };
//# sourceMappingURL=pagina-principal.js.map