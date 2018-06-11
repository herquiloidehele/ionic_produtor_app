var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeMedidaProvider } from "../unidade-medida/unidade-medida";
/*
  Generated class for the ConversorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConversorProvider = /** @class */ (function () {
    function ConversorProvider(http, unidadeMedidaProvider) {
        var _this = this;
        this.http = http;
        this.unidadeMedidaProvider = unidadeMedidaProvider;
        this.unidadesMedidas = [];
        this.razaoDeConversao = [];
        this.unidadeMedidaProvider.getAll().subscribe(function (response) {
            _this.unidadesMedidas = response['unidades_medidas'];
        }, function (erros) {
            console.log(erros);
        }, function () {
            console.log(_this.unidadesMedidas);
        });
        this.razaoDeConversao = [
            { from: 'TONELADA', to: 'QUILOGRAMA', razao: 1000 },
            { from: 'TONELADA', to: 'TONELADA', razao: 1 },
            { from: 'TONELADA', to: 'GRAMA', razao: 1000 },
            { from: 'QUILOGRAMA', to: 'GRAMA', razao: 1000000 },
            { from: 'QUILOGRAMA', to: 'QUILOGRAMA', razao: 1 },
        ];
    }
    /**
     * Dada uma unidade de medica, retona o conjunto de unidades de
     * medidas que sao possiveis de se efectuar a conversao
     * @param unidadeMedida
     */
    ConversorProvider.prototype.getUnitConversions = function (unidadeMedida) {
        var unitConvertions = [];
        switch (unidadeMedida.toUpperCase()) {
            case 'TONELADA':
                {
                    for (var _i = 0, _a = this.unidadesMedidas; _i < _a.length; _i++) {
                        var unit = _a[_i];
                        if (unit.designacao.toUpperCase() == 'QUILOGRAMA' || unit.designacao.toUpperCase() == 'GRAMA' || unit.designacao.toUpperCase() == 'TONELADA') {
                            unitConvertions.push(unit);
                        }
                    }
                }
                break;
            case 'QUILOGRAMA':
                {
                    for (var _b = 0, _c = this.unidadesMedidas; _b < _c.length; _b++) {
                        var unit = _c[_b];
                        if (unit.designacao.toUpperCase() == 'GRAMA' || unit.designacao.toUpperCase() == 'QUILOGRAMA') {
                            unitConvertions.push(unit);
                        }
                    }
                }
                break;
        }
        return unitConvertions;
    };
    /**
     * Verifica se uma unidade de medida pode ser convertida para outra ou nao
     * @param unitFrom
     * @param unitTo
     */
    ConversorProvider.prototype.verificarConversao = function (unitFrom, unitTo) {
        if (unitFrom.toUpperCase() == unitTo.toUpperCase())
            return false;
        var unitConvertions = this.getUnitConversions(unitFrom);
        if (unitConvertions.length == 0)
            return false;
        else {
            for (var _i = 0, unitConvertions_1 = unitConvertions; _i < unitConvertions_1.length; _i++) {
                var unit = unitConvertions_1[_i];
                if (unit.designacao.toUpperCase() == unitTo.toUpperCase())
                    return true;
            }
        }
        return false;
    };
    /**
     * Retorna a razao de conversao entre duas unidades de medidas
     * @param {String} unitFrom
     * @param {String} unitTo
     */
    ConversorProvider.prototype.getRazaoConversao = function (unitFrom, unitTo) {
        for (var _i = 0, _a = this.razaoDeConversao; _i < _a.length; _i++) {
            var razaoConv = _a[_i];
            if (razaoConv.from == unitFrom.toUpperCase() && razaoConv.to == unitTo.toUpperCase()) {
                return razaoConv.razao;
            }
        }
        return 0;
    };
    ConversorProvider.prototype.converter = function (unitFrom, unitTo, quantidade) {
        if (this.verificarConversao(unitFrom, unitTo)) {
            return quantidade * this.getRazaoConversao(unitFrom, unitTo);
        }
        return quantidade;
    };
    ConversorProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UnidadeMedidaProvider])
    ], ConversorProvider);
    return ConversorProvider;
}());
export { ConversorProvider };
//# sourceMappingURL=conversor.js.map