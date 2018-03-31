import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistarRevendedoresPage} from "../cadastros/registar-revendedores/registar-revendedores";

/**
 * Generated class for the RevendedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revendedores',
  templateUrl: 'revendedores.html',
  entryComponents: [RegistarRevendedoresPage]
})
export class RevendedoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  onClickAdicionarRevendedor(){
    this.navCtrl.push(RegistarRevendedoresPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevendedoresPage');
  }

}
