import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-preview-publicacao',
  templateUrl: 'preview-publicacao.html',
})
export class PreviewPublicacaoPage {


  protected publicacao: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.publicacao = this.navParams.get('publicacao');
  }

}
