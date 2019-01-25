import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublicacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicacoes',
  templateUrl: 'publicacoes.html',
})
export class PublicacoesPage {

 protected publicacoes = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.publicacoes = [100, 200, 500, 40, 50, 100, 200, 300, 400, 100, 80, 170, 102, 145, 152];
  }

}
