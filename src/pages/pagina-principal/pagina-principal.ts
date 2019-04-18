import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerfilPrivadoPage} from "../perfil-privado/perfil-privado";
import {PublicacoesPage} from "../publicacoes/publicacoes";
import {MercadoPage} from "../mercado/mercado";
import {ProcurasPage} from "../procuras/procuras";


@IonicPage()
@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  protected tab1 = PerfilPrivadoPage;
  protected tab2 = PublicacoesPage;
  protected tab3 = MercadoPage;
  protected tab4 = ProcurasPage;
  protected tabIndex;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabIndex = this.navParams.get('tabIndex');
  }

  ionViewDidLoad(){

  }





}
