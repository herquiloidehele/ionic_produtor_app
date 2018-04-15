import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {AutenticacaoProvider} from "../providers/autenticacao/autenticacao";
import {TabsPage} from "../pages/modulo-cadastrador/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public autenticacaoProvider: AutenticacaoProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

      this.getPage();
  }



  getPage(){
    let token = localStorage.getItem('token');

    if(token) {
        this.autenticacaoProvider.getUserFromToken(token).subscribe(
            (response) => {
                if (response.tipo_user == 'Cadastrador')
                    this.rootPage = TabsPage;
                if (response.tipo_user == 'Produtor')
                    alert('Produtor');
                if (response.tipo_user == 'Revendedor')
                    alert('Revendedor');
                this.rootPage = TabsPage;
            },
            (erros) => {
                this.rootPage = LoginPage;
            }
        );
    }else{
        console.log('Nao existe Token Ainda');
        this.rootPage = LoginPage;
    }


  }




}
