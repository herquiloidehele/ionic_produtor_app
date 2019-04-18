import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-termos-condicoes',
  templateUrl: 'termos-condicoes.html',
})
export class TermosCondicoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermosCondicoesPage');
  }


  voltar(){
    this.navCtrl.pop();
  }
}
