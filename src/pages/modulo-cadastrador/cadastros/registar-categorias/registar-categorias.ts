import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegistarCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-categorias',
  templateUrl: 'registar-categorias.html',
})
export class RegistarCategoriasPage {


  categorias : any[] ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.categorias = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4",];
  }


  onClickAdicionar(){
    let alert = this.alertController.create({
      title: 'Adicionar Categoria',

      inputs: [{
        name: 'categoria',
        placeholder: 'Categoria'
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: (dados) => {
            console.log('Cacelado');
          },
        },
        {
          text: 'Salvar',
          handler: (categoriaAdicionada)=>{
            this.categorias.push(categoriaAdicionada.categoria)
          }
        }
      ],
    });

    alert.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistarCategoriasPage');
  }

}
