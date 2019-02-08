import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonProvider} from "../../providers/json/json";
import {ShowEscolherProdutosPage} from "../show-escolher-produtos/show-escolher-produtos";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  protected start: number;
  protected formGroup: FormGroup;

  protected localizacao = {
    provincia: {},
    distrito: {}
  };

  protected user = {};

  protected  provincias = [];
  protected  distritos = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonProvider: JsonProvider) {
    this.getProvincias();
    this.initializeValidators();
  }

  ionViewDidLoad(){
    this.user = this.navParams.get('user');
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

  protected onSelectProvincias(provincia){
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

  protected onSelectDistritos(distrito){
    this.localizacao.distrito = distrito;
  }

  protected onClickProvincia(){
    this.start = 0;
  }

  protected initializeValidators(){
    this.formGroup = new FormGroup({
      provincia: new FormControl('', Validators.required),
      distrito: new FormControl('', Validators.required)
    });
  }

  protected validarForm(){
    if(this.start == 0)
      return this.formGroup.controls.provincia.valid;
    else
      return this.formGroup.controls.distrito.valid;
  }

  protected onNext(){
    if(this.start > 0){
      this.user['distrito_id'] = this.localizacao['distrito']['id'];
      this.navCtrl.push(ShowEscolherProdutosPage, {user: this.user});
    }
    this.start += 1;
  }


}
