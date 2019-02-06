import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the ProdutosListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-list',
  templateUrl: 'produtos-list.html',
})
export class ProdutosListPage {


  protected produtos = [];

  constructor(public viewCtr: ViewController, public navParams: NavParams, public urlProvider: UrlapiProvider) {
    this.produtos = this.navParams.get('produtos');
  }



  selecionarProduto(produto){
    this.viewCtr.dismiss(produto);
  }

}
