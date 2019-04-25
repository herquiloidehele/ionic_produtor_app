import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";


@IonicPage()
@Component({
  selector: 'page-produto-mais-produrados',
  templateUrl: 'produto-mais-produrados.html',
})
export class ProdutoMaisProduradosPage {

  protected produtos = [];
  protected produtosCopy = [];
  protected mercado;


  constructor(public navCtrl: NavController, public navParams: NavParams, public urlApi: UrlapiProvider) {

  }

  ionViewDidLoad() {
    this.produtos = this.navParams.get('produtos');
    this.mercado = this.navParams.get('mercado');
    this.produtosCopy = this.produtos;
  }



  protected onInput(event){
    this.produtos = this.produtosCopy;

    this.produtos = this.produtos.filter((produto) => {
      return (produto['produto'].designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
    });
  }
}
