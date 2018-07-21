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
import { RegistarProdutosPage } from "../cadastros/registar-produtos/registar-produtos";
import { RegistarCategoriasPage } from "../cadastros/registar-categorias/registar-categorias";
import { RegistarUnidadesMedidasPage } from "../cadastros/registar-unidades-medidas/registar-unidades-medidas";
import { CategoriasProvider } from "../../../providers/categorias/categorias";
import { CategoriaPage } from "../../categoria/categoria";
var ProdutosPage = /** @class */ (function () {
    function ProdutosPage(navCtrl, navParams, categoriaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoriaProvider = categoriaProvider;
        this.categorias = [];
        this.copyCategorias = [];
        this.showSearch = false;
    }
    ProdutosPage.prototype.ionViewWillEnter = function () {
        this.listarProdutos();
    };
    ProdutosPage.prototype.listarProdutos = function () {
        var _this = this;
        this.categoriaProvider.getAll().subscribe(function (resultado) {
            console.log(resultado);
            _this.categorias = resultado['categorias'];
            _this.copyCategorias = _this.categorias;
        }, function (erros) {
            console.log(erros);
        }, function () { console.log('Terminado'); });
    };
    ProdutosPage.prototype.onClickRegistarProdutos = function () {
        this.navCtrl.push(RegistarProdutosPage);
    };
    ProdutosPage.prototype.onClickRegistarCategorias = function () {
        this.navCtrl.push(RegistarCategoriasPage);
    };
    ProdutosPage.prototype.onClickRegistarUnidadeMedida = function () {
        this.navCtrl.push(RegistarUnidadesMedidasPage);
    };
    ProdutosPage.prototype.onClickCardCategoria = function (categoria) {
        this.navCtrl.push(CategoriaPage, { categoria: categoria });
    };
    ProdutosPage.prototype.showSeachBar = function () {
        if (this.showSearch == true)
            this.showSearch = false;
        else
            this.showSearch = true;
    };
    ProdutosPage.prototype.hideSearchBar = function () {
        this.showSearch = false;
    };
    ProdutosPage.prototype.getItems = function (evento) {
        this.categorias = this.copyCategorias;
        var pesquisa = evento.target.value;
        if (pesquisa && pesquisa.trim() != '') {
            this.categorias = this.categorias.filter(function (categoria) {
                return (categoria.designacao.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1);
            });
        }
    };
    ProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtos',
            templateUrl: 'produtos.html',
            entryComponents: [RegistarProdutosPage, RegistarCategoriasPage, RegistarUnidadesMedidasPage],
        }),
        __metadata("design:paramtypes", [NavController, NavParams, CategoriasProvider])
    ], ProdutosPage);
    return ProdutosPage;
}());
export { ProdutosPage };
//# sourceMappingURL=produtos.js.map