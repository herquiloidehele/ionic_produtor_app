import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {RevendedorProfilePage} from "../revendedor-profile/revendedor-profile";
import {ProcurasProvider} from "../../providers/procuras/procuras";

/**
 * Generated class for the DetalhesProcuraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-procura',
  templateUrl: 'detalhes-procura.html',
})
export class DetalhesProcuraPage {


  protected procura;
  protected procurasSemelhantes;

  constructor(public urlApi: UrlapiProvider, public procuraProvicer: ProcurasProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.procura = this.navParams.get('procura');
    this.getProcurasSemelhantes();
  }


  goPerfilRevendedor(revendedor, distrito){
    this.navCtrl.push(RevendedorProfilePage, {revendedor: revendedor, distrito: distrito});
  }


  getProcurasSemelhantes(){
    this.procuraProvicer.getProcurasSemelhantes(this.procura['id']).subscribe((response) => {
      console.table(response);
      this.procurasSemelhantes = response['procuras'];
    },
      (error) => {
        console.log(error);
      }
    );
  }


  private goDetalhesProcura(procura){
    this.navCtrl.push(DetalhesProcuraPage, {procura: procura})
  }



}
