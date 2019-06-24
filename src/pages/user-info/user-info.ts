import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LocalizacaoPage} from "../localizacao/localizacao";
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {FormGroup, Validators, FormControl, AbstractControl} from "@angular/forms";

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
    if(this.start == 2)
      this.goToLocalizacaoPage();

    console.log(this.start);
  }

   goToLocalizacaoPage(){
    const loading = this.loadingController.create({content: 'Aguarde'});
    loading.present();
    console.log(this.user);
    this.authProvider.verifyNumber(this.user.username).subscribe(
      (response) => {

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
        loading.dismiss();
     }
    );
  }


  public validacaoNome(control: AbstractControl): {[key: string] : boolean} | null{

    let nomes = control.value.trim().split(" ");
    if(!(nomes.length > 1))
      return {"nome" : true};
    return null;
  }


  private async showMessage(title: string, message: string){
    const aletrer = await this.alertController.create({
      'title' : title,
      'message': message,
      buttons: ['ok']
    });

    aletrer.present()
  }


  protected onNameKeyUp(event){
    if(this.formGroup.controls['nome'].valid)
      this.start = 1;
    else
      this.start = 0;
  }

  protected onContactoKeyUp(event){
    if(this.formGroup.controls['nome'].valid && this.formGroup.controls['username'].valid){
      this.start = 2;
    }else{
      this.start = 1;
    }
  }

  protected onKeyUp() {
    this.start = 0;
  }


  vadacaoForm(){

    this.formGroup = new FormGroup({
      nome: new FormControl('', [this.validacaoNome, Validators.maxLength(40), Validators.minLength(5), Validators.required]),
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
