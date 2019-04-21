import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";



@IonicPage()
@Component({
  selector: 'page-produto-edit',
  templateUrl: 'produto-edit.html',
})
export class ProdutoEditPage {


  protected produto = {};

  constructor(public navCtrl: NavController, public alertController: AlertController, public navParams: NavParams, public urlProvider: UrlapiProvider) {
    this.produto = this.navParams.get('produto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoEditPage');
  }


  public adicionarQuantidade(){
    this.alertController.create({
      title: "Quantidade",
      subTitle: "Introduza a Quantidade",
      inputs: [
        {
          label: "Quantidade",
          placeholder: "Quantidade que produz",
          type: "text",
          name: "quantidade",
        },
        {
          label: "Unidade de Medida",
          placeholder: "Quantidade que produz",
          type: "text",
          name: "unidade_medida",
        }
      ]
    }).present();
  }



}
