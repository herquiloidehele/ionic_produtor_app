import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProdutosProvider} from "../../providers/produtos/produtos";

/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {


  protected produtos = [];
  protected produtoSelecionado = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosProvider: ProdutosProvider) {
    this.getAllProdutos();
  }

  getAllProdutos(){
    // this.produtosProvider.getAll().subscribe(
    //   response => {
    //     this.produtos = response['produtos'];
    //   }
    // );
  }

  getProdutoSelecionado(produto){
    this.produtoSelecionado = produto;
    console.log(produto);
  }


}
