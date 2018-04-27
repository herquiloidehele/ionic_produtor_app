import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ProdutosDisponibilizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-disponibilizados',
  templateUrl: 'produtos-disponibilizados.html',
})
export class ProdutosDisponibilizadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosDisponibilizadosPage');
  }

  ionViewWillEnter(){
    this.viewController.showBackButton(false);
  }

}
