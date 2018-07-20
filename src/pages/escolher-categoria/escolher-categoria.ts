import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the EscolherCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolher-categoria',
  templateUrl: 'escolher-categoria.html',
})
export class EscolherCategoriaPage {


  protected categorias = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCintroller: ViewController,
  ) {

  }

  ionViewDidLoad() {
    this.categorias = this.navParams.get('categorias');
  }

  selecionarCategoria(categoria){
    this.viewCintroller.dismiss({categoria: categoria});
  }

  public dismiss(){
    this.viewCintroller.dismiss();
  }







}
