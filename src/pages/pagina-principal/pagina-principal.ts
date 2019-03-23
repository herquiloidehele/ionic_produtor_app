import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerfilPrivadoPage} from "../perfil-privado/perfil-privado";
import {PublicacoesPage} from "../publicacoes/publicacoes";
import {MercadoPage} from "../mercado/mercado";

/**
 * Generated class for the PaginaPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  protected tab1 = PerfilPrivadoPage;
  protected tab2 = PublicacoesPage;
  protected tab3 = MercadoPage;
  protected tab4 = PerfilPrivadoPage;
  protected tabIndex = 2;
  // protected hideTabs = false;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.tabIndex = this.navParams.get('tabIndex') ? this.navParams.get('tabIndex') : 1;
  }





}
