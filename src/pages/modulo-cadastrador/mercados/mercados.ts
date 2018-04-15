import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistarMercadosPage} from "../cadastros/registar-mercados/registar-mercados";
import {MercadoProvider} from "../../../providers/mercado/mercado";

/**
 * Generated class for the MercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mercados',
  templateUrl: 'mercados.html',
  entryComponents: [RegistarMercadosPage]
})
export class MercadosPage {

  private mercados: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private mercadoProvider: MercadoProvider) {
  }


  onClickAdicionarMercado(){
    this.navCtrl.push(RegistarMercadosPage);
  }


  ionViewDidLoad(){
    this.getAll();
  }

  getAll(){
    this.mercadoProvider.getAll().subscribe(
        (resultado) => {
          this.mercados = resultado['mercados'];
          console.log(resultado);
        },
        (erros) => {
          console.log(erros);
        },
        () =>{
          console.log('Busca de Mercados Terminada');
        }
    )
  }




}
