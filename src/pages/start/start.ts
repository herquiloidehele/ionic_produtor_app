import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserInfoPage} from "../user-info/user-info";
import {LoginPage} from "../login/login";
import {TermosCondicoesPage} from "../termos-condicoes/termos-condicoes";

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  start(){
    this.navCtrl.push(UserInfoPage);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToTermosCondicoes(){
    this.navCtrl.push(TermosCondicoesPage);
  }

}
