import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {LocalizacaoPage} from "../localizacao/localizacao";

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {


  protected start: number;

  protected user = {
    telefone: '',
    nome: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
  ) {
    this.start = 0;
  }


  onNext(){

    if(this.start > 0)
      this.navCtrl.push(LocalizacaoPage);

    this.start += 1;
    console.log(this.start);
  }

  onKeyUp(){
    this.start = 0;
  }





}
