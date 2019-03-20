var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MercadoProvider } from "../../../../providers/mercado/mercado";
var RegistarMercadosPage = /** @class */ (function () {
    function RegistarMercadosPage(navCtrl, navParams, mercadoProvider, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mercadoProvider = mercadoProvider;
        this.alertController = alertController;
        this.mercados = [];
        this.isMercadoIconSelected = false;
        this.mercadoiconName = 'basket';
    }
    RegistarMercadosPage.prototype.ionViewDidLoad = function () {
        this.buscarMercados();
    };
    RegistarMercadosPage.prototype.onClickAdicionar = function () {
        if (this.isMercadoIconSelected) {
            this.mercadoiconName = 'basket';
            this.isMercadoIconSelected = false;
        }
        else {
            this.mercadoiconName = 'ios-close';
            this.isMercadoIconSelected = true;
        }
    };
    /**
     * Adiciona uma marcacao com uma deteminada Imagem
     * @param coordendas
     * @param {String} marquerName
     * @returns {google.maps.Marker}
     */
    RegistarMercadosPage.prototype.adicionarMarkerWithImage = function (coordendas, marquerName, imagem, draggable) {
        if (draggable === void 0) { draggable = false; }
        return new google.maps.Marker({
            position: coordendas,
            map: this.mapa,
            title: marquerName,
            icon: imagem,
            draggable: draggable,
        });
    };
    RegistarMercadosPage.prototype.inicializarMapa = function () {
        var _this = this;
        this.mapOptions = this.criarOptions({ lat: -25.950072, lng: 32.601413 }, 10);
        this.mapa = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        this.rendenrizarMercados();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (response) {
                var coordenadas = {
                    lat: response.coords.latitude,
                    lng: response.coords.longitude
                };
                _this.addMessage(coordenadas, 'Minha Posicao');
                _this.mapa.setCenter(coordenadas);
                _this.adicionarMarker(coordenadas, 'Eu');
            }, function (errorResponse) {
                console.log(errorResponse);
            });
            this.googleMapsEvents();
        }
        else
            console.log('Pegar a localizacao Actual');
    };
    /**
     * Criar Opcoes Iniciais do Map
     * @param {{lat: any; lng: any}} coordenadas
     * @param {number} zoom
     * @returns {{center: google.maps.LatLng; zoom: number}}
     */
    RegistarMercadosPage.prototype.criarOptions = function (coordenadas, zoom) {
        var localizacao = new google.maps.LatLng({
            lat: coordenadas.lat,
            lng: coordenadas.lng
        });
        return {
            center: localizacao,
            zoom: zoom
        };
    };
    /**
     * Adiciona uma marcacao no mapa
     * @param coordendas
     * @param {String} marquerName
     * @returns {google.maps.Marker}
     */
    RegistarMercadosPage.prototype.adicionarMarker = function (coordendas, marquerName) {
        return new google.maps.Marker({
            position: coordendas,
            map: this.mapa,
            title: marquerName,
        });
    };
    /**
     * Adiciona uma mensagem num determinado ponto
     * @param posicao
     * @param mensagem
     */
    RegistarMercadosPage.prototype.addMessage = function (posicao, mensagem) {
        var infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(posicao);
        infoWindow.setContent(mensagem);
        infoWindow.open(this.mapa);
    };
    /**
     * Adiciona uma conjunto de eventos no mapa
     */
    RegistarMercadosPage.prototype.googleMapsEvents = function () {
        var _this = this;
        this.mapa.addListener('click', function (event) {
            if (_this.isMercadoIconSelected) {
                _this.mostrarPrompt(event);
            }
        });
    };
    RegistarMercadosPage.prototype.mostrarPrompt = function (coordenadas) {
        var _this = this;
        this.alertController.create({
            title: 'Registar Mercado',
            message: 'Introduza o nome do Mercado',
            buttons: [
                {
                    text: 'CANCELAR',
                    handler: function () {
                        console.log('cancelado');
                    },
                },
                {
                    text: 'SALVAR',
                    handler: function (dados) {
                        var mercado = {
                            designacao: dados.designacao,
                            longitude: coordenadas.latLng.lng(),
                            latitude: coordenadas.latLng.lat(),
                        };
                        console.log(mercado);
                        _this.salvarMercado(mercado, coordenadas);
                    }
                }
            ],
            inputs: [
                {
                    name: 'designacao',
                    placeholder: 'Nome do Mercado'
                }
            ]
        }).present();
    };
    RegistarMercadosPage.prototype.salvarMercado = function (mercado, event) {
        var _this = this;
        this.mercadoProvider.salvar(mercado).subscribe(function (response) {
            console.log(response);
            var imagem = '../../../../assets/imgs/map-mercado-icon.svg';
            var mercado = response.mercado;
            _this.adicionarMarkerWithImage(event.latLng, mercado.designacao, imagem, true);
            _this.addMessage({ lat: event.latLng.lat(), lng: event.latLng.lng() }, mercado.designacao);
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log('Complete save mercado');
        });
    };
    RegistarMercadosPage.prototype.buscarMercados = function () {
        var _this = this;
        this.mercadoProvider.getAll().subscribe(function (response) {
            _this.mercados = response.mercados;
        }, function (erros) {
            console.log(erros);
        }, function () {
            _this.inicializarMapa();
            console.log('Busaca de mercado end.');
        });
    };
    RegistarMercadosPage.prototype.rendenrizarMercados = function () {
        for (var _i = 0, _a = this.mercados; _i < _a.length; _i++) {
            var mercado = _a[_i];
            var imagem = '../../../../assets/imgs/map-mercado-icon.svg';
            if (mercado.localizacao.latitude != null && mercado.localizacao.longetude != null) {
                this.adicionarMarkerWithImage({ lat: mercado.localizacao.latitude, lng: mercado.localizacao.longetude }, mercado.designacao, imagem);
                this.addMessage({ lat: mercado.localizacao.latitude, lng: mercado.localizacao.longetude }, mercado.designacao);
            }
        }
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], RegistarMercadosPage.prototype, "mapElement", void 0);
    RegistarMercadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-mercado',
            templateUrl: 'registar-mercados.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            MercadoProvider,
            AlertController])
    ], RegistarMercadosPage);
    return RegistarMercadosPage;
}());
export { RegistarMercadosPage };
//# sourceMappingURL=registar-mercado.js.map
