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
  protected hideTabs = true;



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


  protected getMinhasPublicacoes(){
    this.storageController.get('user').then((user) => {
      this.ofertasProvider.getOfertas(user['id']).subscribe((response)=> {
          console.log(response);
          this.publicacoes = response['ofertas'];
          this.storageController.set('publicacoes', this.publicacoes);
        },
        (error) => {
          console.log(error);
          this.getOfertasLocais();
        });
    }).catch((error) => {
      console.log({erro: error});
    });
  }


  protected getOfertasLocais(){
    this.storageController.get('publicacoes').then((publicacoes) => {
      alert("ddd");
      this.publicacoes = publicacoes;
    }).catch((error) => {
      console.log(error);
    });
  }


}
