import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LocalizacaoPage} from "../localizacao/localizacao";
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {FormGroup, Validators, FormControl} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {


  protected start: number;
  protected formGroup: FormGroup;


  protected user = {
    nome: '',
    username: ''
  };

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController,
              public authProvider: AutenticacaoProvider,
              public alertController: AlertController,
  ) {
    this.start = 0;
    this.vadacaoForm();

  }


  onNext(){

    if(this.start > 0)
      this.goToLocalizacaoPage();
    else{
      this.start += 1;
    }
    console.log(this.start);
  }

   goToLocalizacaoPage(){
    const loading = this.loadingController.create({content: 'Aguarde'});
    loading.present();
    this.authProvider.verifyNumber(this.user.username).subscribe(
      (response) => {
          loading.dismiss();

          console.log(response);
          if(response['result'] == true) {
            this.showMessage('Aviso', 'Outro Prdutor está a user esse numero, Use outro Numero');
          }
          else{
            this.navCtrl.push(LocalizacaoPage, {user: this.user});
          }
      },
      (error) => {
        loading.dismiss();
        console.log(error);
        this.showMessage('Erro','Verifique a sua internet, Tente Novamente');
      }, () => {

     }
    );
  }



  private async showMessage(title: string, message: string){
    const aletrer = await this.alertController.create({
      'title' : title,
      'message': message,
      buttons: ['ok']
    });

    aletrer.present()
  }


  onKeyUp(){
    this.start = 0;
  }

  vadacaoForm(){

    this.formGroup = new FormGroup({
      nome: new FormControl('', [Validators.maxLength(30), Validators.minLength(3), Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    });

  }

  validarForm(formGroup){
    console.log(this.start);
    if(this.start == 0)
      return formGroup.controls.nome.valid;
    else
      return formGroup.controls.username.valid;
  }




}
