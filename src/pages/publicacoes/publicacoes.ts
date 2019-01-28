import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";

@IonicPage()
@Component({
  selector: 'page-publicacoes',
  templateUrl: 'publicacoes.html',
})
export class PublicacoesPage {

 protected publicacoes = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public ofertasProvider: OfertasProvider) {

  }

  ionViewDidLoad(){
    this.ofertasProvider.getAll().subscribe(
      (response) => {
        this.publicacoes = response['ofertas'];
      }
    );
  }




}
