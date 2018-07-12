import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {TabsPage} from "../modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import {MenuProvider} from "../../providers/menu/menu";
import {InicioPage} from "../modulo-revendedor/inicio/inicio";

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



  private user: any = {
    username: null,
      password: null,
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public autenticacaoService: AutenticacaoProvider,
              public menuProvider: MenuProvider,
              public alertController: AlertController
  ) {

  }


  onSignIn(){


    const user = {username: this.user.username, password: this.user.password};
    this.autenticacaoService.login(user).subscribe(
        (resultado) => {

          localStorage.setItem('user', JSON.stringify(resultado.user));
          localStorage.setItem('token', resultado.token);


          this.menuProvider.setTipoUser(resultado.tipo_user);
          this.menuProvider.setShowMenu(true);
          console.log(resultado.user);

          this.redirecionarUser(resultado.tipo_user, resultado.user);
        },
        (erro) => {
          switch (erro.status){
            case 0: this.mostrarAlert('Servidor Indisponivel', 'Ligue o servidor para ter acesso a aplicação'); break;
            case 401: this.mostrarAlert('Credenciais Erradas'); break;
            case 422: this.mostrarAlert('Dados Invalidos', 'Verifique os dados Inseridos'); break;
            default: this.mostrarAlert('Ocorreu um erro Inesperado', 'Volte a tentar mais tarde');
          }
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
        this.navCtrl.setRoot(TabsPage, {tipoUser: tipoUser, user: user});
    }

    if(tipoUser == 'Produtor'){
      this.navCtrl.setRoot(ProdutosrequsitadosPage, {tipoUser: tipoUser, user: user});
    }

    if(tipoUser == 'Revendedor'){
      this.navCtrl.setRoot(InicioPage, {tipoUser: tipoUser, user: user});
    }
  }


  private mostrarAlert(titulo, messagem = null){
    this.alertController.create(
      {
        title: titulo,
        message: messagem,
        buttons: [{
          text: 'OK',
        }]
      }
    ).present();
  }









}
