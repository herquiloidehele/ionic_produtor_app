import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the ProdutosDoMercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-do-mercados',
  templateUrl: 'produtos-do-mercados.html',
})
export class ProdutosDoMercadosPage {

  protected produtos = [];
  protected produtosCopy = [];
  protected mercado;


  constructor(public navCtrl: NavController, public navParams: NavParams, public urlApi: UrlapiProvider) {

  }

  ionViewDidLoad() {
    this.produtos = this.navParams.get('produtos');
    this.mercado = this.navParams.get('mercado')
    this.produtosCopy = this.produtos;
  }



  protected onInput(event){
    this.produtos = this.produtosCopy;

    this.produtos = this.produtos.filter((produto) => {
      return (produto['produto'].designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
    });
  }

}
