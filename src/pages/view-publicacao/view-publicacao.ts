import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-publicacao',
  templateUrl: 'view-publicacao.html',
})
export class ViewPublicacaoPage {


  protected publicacao;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.publicacao = this.navParams.get('publicacao');
  }



  voltar(){
    this.navCtrl.pop();
  }
}
