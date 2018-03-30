import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegistarUnidadesMedidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-unidades-medidas',
  templateUrl: 'registar-unidades-medidas.html',
})
export class RegistarUnidadesMedidasPage {

  unidadeMedidas : any[] ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.unidadeMedidas = [{designacao: 'Quilogama', abreviatura: "KG"}, {designacao: "Saco", abreviatura: 'SC'}, {designacao: "Tonelada", abreviatura: "Ton"}];
  }


  onClickAdicionar(){
    let alert = this.alertController.create({
      title: 'Adicionar Categoria',

      inputs: [
        {
          name: 'designacao',
          placeholder: 'Unidade de Medida'
        },
        {
          name: 'abreviatura',
          placeholder: 'Avbreviatura'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: (dados) => {
            console.log('Cacelado');
          },
        },
        {
          text: 'Salvar',
          handler: (dados)=>{
            this.unidadeMedidas.push(dados)
          }
        }
      ],
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistarUnidadesMedidasPage');
  }

}
