import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

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
    this.viewCintroller.dismiss({categoria: {designacao: '', id: ''}});
  }







}
