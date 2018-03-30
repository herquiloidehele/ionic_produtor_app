import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistarProdutosPage} from "../cadastros/registar-produtos/registar-produtos";
import {RegistarCategoriasPage} from "../cadastros/registar-categorias/registar-categorias";
import {RegistarUnidadesMedidasPage} from "../cadastros/registar-unidades-medidas/registar-unidades-medidas";



@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  entryComponents: [RegistarProdutosPage, ],
})
export class ProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }


  onClickRegistarProdutos(){
    this.navCtrl.push(RegistarProdutosPage);
  }

  onClickRegistarCategorias(){
    this.navCtrl.push(RegistarCategoriasPage);
  }

  onClickRegistarUnidadeMedida(){
    this.navCtrl.push(RegistarUnidadesMedidasPage);
  }


}
