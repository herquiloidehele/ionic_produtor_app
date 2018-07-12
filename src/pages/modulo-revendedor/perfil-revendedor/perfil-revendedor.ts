import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilRevendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-revendedor',
  templateUrl: 'perfil-revendedor.html',
})
export class PerfilRevendedorPage {


  protected revendedor: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.revendedor =  this.navParams.get('revendedor');
  }



  voltar(){
    this.navCtrl.pop();
  }




}
