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
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { EscolherCategoriaPage } from "../../../escolher-categoria/escolher-categoria";
import { FormBuilder, Validators } from "@angular/forms";
import { ProdutosProvider } from "../../../../providers/produtos/produtos";
import { CategoriasProvider } from "../../../../providers/categorias/categorias";
/**
 * Generated class for the RegistarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistarProdutosPage = /** @class */ (function () {
    function RegistarProdutosPage(navCtrl, navParams, modalController, formBuilder, produtoProvider, categoriaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.produtoProvider = produtoProvider;
        this.categoriaProvider = categoriaProvider;
        this.categorias = [];
        this.produto = {
            designacao: '',
            categoria: {
                designacao: '',
                id: ''
            },
            variedades: [],
            lastVariedade: ''
        };
        this.myFormGroup = this.createMyForm();
    }
    RegistarProdutosPage.prototype.ionViewDidLoad = function () {
        this.buscarCategorias();
    };
    RegistarProdutosPage.prototype.openCategorias = function () {
        var _this = this;
        var modal = this.modalController.create(EscolherCategoriaPage, { categorias: this.categorias });
        modal.onDidDismiss(function (categoria) {
            _this.produto.categoria = categoria.categoria;
        });
        modal.present();
    };
    RegistarProdutosPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            produto: ['', Validators.required],
            categoria: ['', Validators.required],
            lastVariedade: ['', Validators.required]
        });
    };
    RegistarProdutosPage.prototype.addVariedade = function () {
        this.produto.variedades.push(this.produto.lastVariedade);
        this.produto.lastVariedade = '';
    };
    RegistarProdutosPage.prototype.salvarProduto = function () {
        var _this = this;
        this.produtoProvider.salvar(this.produto).subscribe(function (response) {
            console.log(response);
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    RegistarProdutosPage.prototype.buscarCategorias = function () {
        var _this = this;
        this.categoriaProvider.getAll().subscribe(function (response) {
            console.log(response);
            _this.categorias = response['categorias'];
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('busca de categorias');
        });
    };
    RegistarProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-produtos',
            templateUrl: 'registar-produtos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ModalController,
            FormBuilder,
            ProdutosProvider,
            CategoriasProvider])
    ], RegistarProdutosPage);
    return RegistarProdutosPage;
}());
export { RegistarProdutosPage };
//# sourceMappingURL=registar-produtos.js.map