import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the ProdutoSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-select',
  templateUrl: 'produto-select.html',
})
export class ProdutoSelectPage {

  protected produtos = [];
  protected produtosProduzidos;

  constructor(public viewCtr: ViewController, public navParams: NavParams, public urlProvider: UrlapiProvider) {
    this.produtos = this.navParams.get('produtos');
    this.produtosProduzidos = this.navParams.get('produtos_produzidos');
  }


  selecionarProduto(produto){
    this.viewCtr.dismiss(produto);
  }

}
