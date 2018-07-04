import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {OfertasProvider} from "../../../providers/ofertas/ofertas";
import {MeusProdutosPage} from "../meus-produtos/meus-produtos";
import {DetalhesOfertasPage} from "../detalhes-ofertas/detalhes-ofertas";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {


  protected ofertas: any[] = [];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public ofertaProvider: OfertasProvider, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    this.getAllOfertas();
  }


  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }


  getAllOfertas(){
    let revendedor_id = JSON.parse(localStorage.getItem('user'))['id'];
    this.ofertaProvider.getOfertasToRevendedor(revendedor_id).subscribe(
      (response) => {
        console.log(response);
        this.ofertas = response['ofertas'];
      },
      (error) => {
        console.log(error);
      }
    );
  }


  goToInteresses(){
    this.navCtrl.push(MeusProdutosPage);
  }

  getData(data){
    return new Date(data);
  }

  goToDetalhesOferta(oferta){
    this.navCtrl.push(DetalhesOfertasPage, {oferta: oferta});
  }




}
