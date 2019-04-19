import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";



@IonicPage()
@Component({
  selector: 'page-adicionar-produtos',
  templateUrl: 'adicionar-produtos.html',
})
export class AdicionarProdutosPage {


  protected produtos;
  protected produtosProduzidos;

  constructor(public viewCtr: ViewController, public navParams: NavParams, public urlApi: UrlapiProvider) {
    this.produtos = this.navParams.get('produtos');
    this.produtosProduzidos = this.navParams.get('produtos_produzidos');
  }

  ionViewDidLoad() {

  }


  protected selecionarProduto(produto){
    this.viewCtr.dismiss(produto);
  }


}
