import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EscolherProdutoPage} from "../escolher-produto/escolher-produto";

/**
 * Generated class for the ShowEscolherProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-escolher-produtos',
  templateUrl: 'show-escolher-produtos.html',
})
export class ShowEscolherProdutosPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  onNext() {
    this.navCtrl.push(EscolherProdutoPage, {user: this.navParams.get('user')});
  }

}
