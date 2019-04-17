import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
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

  constructor(
    public urlApi: UrlapiProvider,
    public procuraProvicer: ProcurasProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController
    ) {
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
      this.procurasSemelhantes = response['procuras'];
    },
      (error) => {
        console.log(error);
      }
    );
  }


  protected goDetalhesProcura(procura){
    this.navCtrl.push(DetalhesProcuraPage, {procura: procura})
  }


  public async showAlert(){
    const actionSheet = await this.actionSheetController.create({
      title: 'Pretende contactar Via?',
      buttons: [
        {
          text: "CHAMADA",
          icon: 'call',
          handler: () => {
            console.log("Contacto via chamada");
          }
        },
        {
          text: "SMS",
          icon: 'ios-mail',
          handler: () => {
            console.log('contacto via SMS');
          },
        }
      ]
    });

    actionSheet.present();

  }



}
