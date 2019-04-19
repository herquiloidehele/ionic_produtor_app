import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-perfil-privado',
  templateUrl: 'perfil-privado.html',
})
export class PerfilPrivadoPage {

  protected user: {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageController: Storage,
    public alertController: AlertController,
    public modalCtr: ModalController
    ) {

    this.getuserFromStorage();

  }


  protected getuserFromStorage(){
    this.storageController.get('user').then(
      (response) => {
        console.log({storage: response});
        this.user = response;
      }
    ).catch((error) => {
      console.log(error);
      this.showErrorAlert();
    });
  }

  private async showErrorAlert(){
    const alert = this.alertController.create({
      'title': 'Erro',
      'message': 'Não foi possivel carregar os dados do utilizador, Feche e volte a abrir a aplicação',
      buttons: ['ok']
    });

    await alert.present();

  }

  protected getImagesCount(){
    if(this.user['ofertas'].length == 0)
      return 0;
    else{
      let countImagens = this.user['ofertas'].reduce((accumulateOferta, oferta) => {
          return accumulateOferta + oferta['imagens'].reduce((accumulateImagem, imagem) => {
            return accumulateImagem + 1;
          });
      });

      return countImagens;
    }
  }


  //
  // protected gotToAdicionar(){
  //   let modalControler = this.modalCtr.create(ProdutoSelectPage, {produtos: this.user.produtos, produtos_produzidos: this.user.produtos_produzidos.length});
  //   modalControler.present();
  //
  //   modalControler.onDidDismiss((produto) => {
  //     // this.storageController
  //     this.publicacao.produtos_id = produto;
  //   });
  // }





  protected mostrarAlert(){

    if(this.user['user']['estado'] == 0){
      const alert = this.alertController.create({
        'title': 'Mensagem',
        'message': 'A sua conta ainda nao está activa. \n Aguarde até que a sua conta seja activada',
        buttons: ['ok']
      });

       alert.present();
    }else{
      const alert = this.alertController.create({
        'title': 'Mensagem',
        'message': 'Tem a certeza que deseja desactivar a conta?',
        buttons: [{
          text: 'Não',
          handler: value => {
            console.log(value);
          }
        },
          {
            text: 'SIM',
            handler: value => {
              console.log(value);
            }
          }
        ]
      });

       alert.present();
    }
  }


}
