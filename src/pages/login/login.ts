import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {TabsPage} from "../modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import {VariaveisGlobaisProvider} from "../../providers/variaveis-globais/variaveis-globais";
import {MenuProvider} from "../../providers/menu/menu";

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
              public variaveisGlobais: VariaveisGlobaisProvider,
              public menuProvider: MenuProvider
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
          alert('Credenciais erradas');
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
      // MyApp.setRootPage(TabsPage);
      // MyApp.rootPage = TabsPage;
        this.navCtrl.setRoot(TabsPage, {tipoUser: tipoUser, user: user});
    }

    if(tipoUser == 'Produtor'){
      // MyApp.setRootPage(ProdutosrequsitadosPage);
      // MyApp.rootPage = ProdutosrequsitadosPage;
      this.navCtrl.setRoot(ProdutosrequsitadosPage, {tipoUser: tipoUser, user: user});
    }

    if(tipoUser == 'Revendedor'){
      alert('Paginao do Revendedor ainda nao esta Pronta.');
      console.log('Revendedor');
    }



  }








}
