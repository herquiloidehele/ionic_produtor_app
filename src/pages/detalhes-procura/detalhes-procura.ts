import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the DetalhesProcuraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-procura',
  templateUrl: 'detalhes-procura.html',
})
export class DetalhesProcuraPage {


  protected procura;

  constructor(public urlApi: UrlapiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.procura = this.navParams.get('procura');
  }

}
