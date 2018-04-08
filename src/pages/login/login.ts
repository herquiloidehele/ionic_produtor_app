import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  credentialsForm: FormGroup;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public autenticacaoService: AutenticacaoProvider
  ) {

    this.credentialsForm = this.formBuilder.group({
      username: [''],
      senha: [''],
    });
  }


  onSignIn(){

    const user = {username: 'leffler.emmie', password: '12345'};
    this.autenticacaoService.login(user).subscribe(
        (resultado) => {

          localStorage.setItem('token', resultado.token);

          this.redirecionarUser(resultado.tipo_user, resultado.user);
        },
        (erro) => {
          console.log(erro);
        },
        () => {
          console.log('Completo');
        },
    );

  }

  onPasswordForget(){
    console.log('Forget Password');
  }



  private redirecionarUser(tipoUser : String, user: any){
    if(tipoUser == 'Cadastrador'){
        this.navCtrl.push(TabsPage, {user: user});
    }

    if(tipoUser == 'Produtor'){
      alert('Pagina do produtor ainda nao esta pronta');
          console.log('Produtor');
    }

    if(tipoUser == 'Revendedor'){
      alert('Paginao do Revendedor ainda nao esta Pronta.');
      console.log('Revendedor');
    }

  }






}
