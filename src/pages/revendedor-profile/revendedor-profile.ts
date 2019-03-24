import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the RevendedorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revendedor-profile',
  templateUrl: 'revendedor-profile.html',
})
export class RevendedorProfilePage {

  protected revendedor;
  protected distrito;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public urlProvider: UrlapiProvider) {
  }

  ionViewDidLoad() {
    this.revendedor = this.navParams.get('revendedor');
    this.distrito = this.navParams.get('distrito');
  }

}
