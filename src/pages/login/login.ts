import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, PopoverController, ViewController} from 'ionic-angular';
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {TabsPage} from "../modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import {MenuProvider} from "../../providers/menu/menu";
import {InicioPage} from "../modulo-revendedor/inicio/inicio";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

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
              public alertController: AlertController,
              public popOverController: PopoverController,
              public urlprovider: UrlapiProvider
  ) {
  }


  public presentPopover(event){
    this.popOverController.create(PopoverPage, {servers: this.urlprovider.getURLs()}).present({ev: event});
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


@Component({
  template: `
    <ion-list no-lines >
      <ion-list-header>Servidores</ion-list-header>
      <div *ngFor="let server of servers">
        <ion-item *ngIf="server.status">

          <ion-label>{{server.nome}}</ion-label>
          <ion-radio  (click)="close(server.url)" checked="{{isUrlActive(server.url)}}" value="{{server.url}}"></ion-radio>
          
        </ion-item>
      </div>
      
    </ion-list>
  `
})

export class PopoverPage {

  public servers = [];


  constructor(public viewCtrl: ViewController, public navparams: NavParams, public urlApiProvider: UrlapiProvider) {
    this.servers = navparams.data.servers;
  }


  public isUrlActive(urlItem){
    let url = localStorage.getItem('server');
    return url == urlItem;
  }


  close(url) {
    console.log(url);
    this.urlApiProvider.selectUrl(url);
    this.viewCtrl.dismiss();
  }
}
