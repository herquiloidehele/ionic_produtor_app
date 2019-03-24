import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-produto-mais-produrados',
  templateUrl: 'produto-mais-produrados.html',
})
export class ProdutoMaisProduradosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoMaisProduradosPage');
  }

}
