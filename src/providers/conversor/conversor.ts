import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UnidadeMedidaProvider} from "../unidade-medida/unidade-medida";

/*
  Generated class for the ConversorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversorProvider {

  protected unidadesMedidas: any[] = [];
  protected razaoDeConversao = [];




  constructor(public http: HttpClient, public unidadeMedidaProvider: UnidadeMedidaProvider) {
    this.unidadeMedidaProvider.getAll().subscribe(
      (response) => {
        this.unidadesMedidas = response['unidades_medidas']
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        console.log(this.unidadesMedidas);
      }
    );

    this.razaoDeConversao = [
      {from: 'TONELADA', to: 'QUILOGRAMA', razao: 1000},
      {from: 'TONELADA', to: 'TONELADA', razao: 1},
      {from: 'TONELADA', to: 'GRAMA', razao: 1000000},
      {from: 'QUILOGRAMA', to: 'GRAMA', razao: 1000},
      {from: 'QUILOGRAMA', to: 'QUILOGRAMA', razao: 1},
    ];
  }


  /**
   * Dada uma unidade de medica, retona o conjunto de unidades de
   * medidas que sao possiveis de se efectuar a conversao
   * @param unidadeMedida
   */
  public getUnitConversions(unidadeMedida){
    let unitConvertions = [];

    switch (unidadeMedida.toUpperCase()){
      case 'TONELADA' : {
        for(let unit of this.unidadesMedidas){
          if(unit.designacao.toUpperCase() == 'QUILOGRAMA' || unit.designacao.toUpperCase() == 'GRAMA' || unit.designacao.toUpperCase() == 'TONELADA'){
            unitConvertions.push(unit);
          }
        }
      } break;

      case 'QUILOGRAMA': {
        for(let unit of this.unidadesMedidas){
          if(unit.designacao.toUpperCase() == 'GRAMA' || unit.designacao.toUpperCase() == 'QUILOGRAMA'){
            unitConvertions.push(unit);
          }
        }
      } break;

    }


    return unitConvertions;
  }


  /**
   * Verifica se uma unidade de medida pode ser convertida para outra ou nao
   * @param unitFrom
   * @param unitTo
   */
  public verificarConversao(unitFrom: String, unitTo: String): boolean{

    if(unitFrom.toUpperCase() == unitTo.toUpperCase())
      return false;

    let unitConvertions = this.getUnitConversions(unitFrom);

    if(unitConvertions.length == 0)
      return false;

    else{
      for(let unit of unitConvertions){
        if(unit.designacao.toUpperCase() == unitTo.toUpperCase())
          return true;
      }

    }
    return false;
  }


  /**
   * Retorna a razao de conversao entre duas unidades de medidas
   * @param {String} unitFrom
   * @param {String} unitTo
   */
  public getRazaoConversao(unitFrom: String, unitTo: String){
        for(let razaoConv of this.razaoDeConversao){
          if(razaoConv.from == unitFrom.toUpperCase() && razaoConv.to == unitTo.toUpperCase()){
            return razaoConv.razao;
          }
        }

        return 1;
  }


  public converter(unitFrom: String, unitTo: String, quantidade){
    if(this.verificarConversao(unitFrom, unitTo)){
      return this.getRazaoConversao(unitFrom, unitTo) * quantidade;
    }
    return quantidade;
  }














}
