import { Component } from '@angular/core';


import {ProdutoresPage} from "../produtores/produtores";
import {ProdutosPage} from "../produtos/produtos";
import {MercadosPage} from "../mercados/mercados";
import {RevendedoresPage} from "../revendedores/revendedores";
import {AutenticacaoProvider} from "../../../providers/autenticacao/autenticacao";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {LoginPage} from "../../login/login";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = MercadosPage;
  tab3Root = ProdutoresPage;
  tab4Root = RevendedoresPage;

  user: any;
  tipoUser : any;


  constructor(
      private autenticacaoService: AutenticacaoProvider,
      public navControl: NavController,
      public alertController: AlertController,
      public navParam: NavParams,
      public autenticacaoProvider: AutenticacaoProvider
  ) {
      this.getUserData()

  }


    ionViewDidLoad(){
      // this.getUserData();
  }


    getUserData(){
        let token = localStorage.getItem('token');

        if(token) {
            this.autenticacaoProvider.getUserFromToken(token).subscribe(
                (response) => {
                   this.user = response['user'];
                   this.tipoUser = response['tipo_user'];
                    console.log(this.user['user']['username']);
                    console.log(this.tipoUser);
                },
                (erros) => {
                    console.log(erros);
                },
                () => {
                    console.log('getUserData completed');
                }
            );
        }else{
            console.log('Nao existe Token Ainda');
            this.navControl.push(LoginPage)
        }
    }



    public logout() {
        let token = localStorage.getItem('token');

        let prompt = this.alertController.create({
            title: 'Sair',
            message: 'Deseja Sair da Aplicacao?',
            buttons: [
                {
                    text: 'NÃO',
                    handler: (dados) => {
                        console.log('Canecelado');
                    }
                },
                {
                    text: 'SIM',
                    handler: (dados) => {
                        this.sair(token);
                    }
                }

            ],
        });

        prompt.present();


    }


    private sair(token){
        this.autenticacaoService.logout(token).subscribe(
            (resultado) => {
                if (resultado['logout'] == true) {
                    localStorage.removeItem('token');
                    this.navControl.push(LoginPage)
                }
                else
                    alert('Ocorreu algum erro no logout');
            },
            (erros) => {
                console.log(erros);
            }
        );
    }


}

