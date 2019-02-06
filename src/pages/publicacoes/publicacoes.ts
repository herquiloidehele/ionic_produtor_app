import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {RegistarOpertasPage} from "../registar-opertas/registar-opertas";

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

  onImageLoad(){
  }

  cutNomeProvincia(proviniva){
    if(proviniva.length > 8)
      return proviniva.substr(0, 5) + '...';
    else
      return proviniva;
  }


  onInput(event){
    return this.publicacoes;
  }

  onCancel(){
    console.log('cancelado');
  }


  goToRegistarOfertas(){
    this.navCtrl.push(RegistarOpertasPage);
  }

}
