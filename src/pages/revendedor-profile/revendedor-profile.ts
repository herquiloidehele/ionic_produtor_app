import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {RevendedorProvider} from "../../providers/revendedor/revendedor";
import {DetalhesProcuraPage} from "../detalhes-procura/detalhes-procura";

/**
 * Generated class for the RevendedorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revendedor-profile',
  templateUrl: 'revendedor-profile.html',
})
export class RevendedorProfilePage {

  protected revendedor;
  protected loader = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public urlProvider: UrlapiProvider,
    public revendedorProvider: RevendedorProvider,
    public actionSheetController: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.revendedorProvider.get(this.navParams.get('revendedor_id')).subscribe(
      (response) => {
        console.log(response);
        this.revendedor = response['revendedor'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loader = false;
      }
    );
  }

  protected goToProcura(procura){
    this.navCtrl.push(DetalhesProcuraPage, {procura_id: procura.id});
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
