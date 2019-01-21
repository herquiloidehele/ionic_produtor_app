import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-escolher-produto',
  templateUrl: 'escolher-produto.html',
})
export class EscolherProdutoPage {


  protected selectedCards = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClickProximo(){
    console.log('vamos a proximo');
  }


  selectCard(idCard){
    console.log(idCard);
  }


}
