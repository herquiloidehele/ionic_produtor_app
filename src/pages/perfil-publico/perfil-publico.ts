import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProdutoresProvider} from "../../providers/produtores/produtores";


@IonicPage()
@Component({
  selector: 'page-perfil-publico',
  templateUrl: 'perfil-publico.html',
})
export class PerfilPublicoPage {

  protected user;
  protected loader = true;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoresProvider: ProdutoresProvider
    ) {
  }

  ionViewDidLoad() {
    this.produtoresProvider.get(this.navParams.get('produtor_id')).subscribe(
      (response) => {
        this.user = response['produtor'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loader = false;
      }
    )
  }


  protected getImagesCount(){
    let quantidade = 0;
    if(this.user['ofertas'].length == 0)
      return 0;
    else{

      this.user['ofertas'].forEach((oferta) => {
        oferta['imagens'].forEach((imagem) => {
          quantidade++;
        })
      });

      return quantidade;
    }
  }

  voltar(){
    this.navCtrl.pop();
  }

}
