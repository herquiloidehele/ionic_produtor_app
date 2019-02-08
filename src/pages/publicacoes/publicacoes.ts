import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {RegistarOpertasPage} from "../registar-opertas/registar-opertas";
import {ViewPublicacaoPage} from "../view-publicacao/view-publicacao";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-publicacoes',
  templateUrl: 'publicacoes.html',
})
export class PublicacoesPage {

 protected publicacoes;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ofertasProvider: OfertasProvider,
    public storageController: Storage
    ) {

  }

  ionViewDidLoad(){
    this.getMinhasPublicacoes();
  }


  protected onInput(event){
    return this.publicacoes;
  }

  protected onCancel(){
    console.log('cancelado');
  }


  protected goToRegistarOfertas(){
    this.navCtrl.push(RegistarOpertasPage);
  }

  protected viewPublicacao(publicacao){
    this.navCtrl.push(ViewPublicacaoPage, {publicacao: publicacao});
  }


  protected async getMinhasPublicacoes(){
    let produtor = await this.storageController.get('user');
    this.ofertasProvider.getOfertas(produtor['id']).subscribe((response)=> {
      console.log(response);
      this.publicacoes = response['ofertas'];
    },
      (error) => {
      console.log(error);
      })
  }


}
