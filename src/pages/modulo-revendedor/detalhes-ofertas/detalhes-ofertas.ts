import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DetalhesOfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-ofertas',
  templateUrl: 'detalhes-ofertas.html',
})
export class DetalhesOfertasPage {

  protected oferta: any;
  protected parcelas: any[] = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
  ) {



  }

  ionViewWillLoad(){
    this.oferta = this.navParams.get('oferta');
    this.parcelas = this.oferta.parcelas;
    console.log(this.parcelas);
  }


  ionViewDidLoad() {
  }


  voltar(){
    this.navCtrl.pop();
  }



}
