import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonProvider} from "../../providers/json/json";
import {ShowEscolherProdutosPage} from "../show-escolher-produtos/show-escolher-produtos";

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  protected start: number;

  protected localizacao = {
    provincia: {},
    distrito: {}
  };

  protected  provincias = [];
  protected  distritos = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonProvider: JsonProvider) {
    this.getProvincias();
  }



  protected getProvincias(){
    this.jsonProvider.getProvincias().subscribe(
      (response) => {
        this.provincias = response['places'];
        console.log(this.provincias);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete Provinces');
      }
    );
  }

  protected getDistritos(){
    this.jsonProvider.getProvincias().subscribe(
      (response) => {
        this.provincias = response['places'];
        console.log(this.provincias);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete Provinces');
      }
    );
  }



  onSelectProvincias(provincia){
    this.localizacao.provincia = provincia;

    this.jsonProvider.getDistritos().subscribe(
      (response) => {
        let distritos = response['places'];

        this.distritos = distritos.filter((distrito) => {
          return distrito['in_place']['id'] === this.localizacao.provincia['id'];
        });

        },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete Distritos');
        this.start += 1;
      }
    )
  }

  onSelectDistritos(distrito){
    this.localizacao.distrito = distrito;
    console.log(this.localizacao);
  }

  onClickProvincia(){
    this.start = 0;
  }

  onNext(){
    if(this.start > 0){
      this.navCtrl.push(ShowEscolherProdutosPage, {localizacao: this.localizacao});
    }
    this.start += 1;
  }



}
