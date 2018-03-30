import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
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
  ) {

    this.credentialsForm = this.formBuilder.group({
      username: [''],
      senha: [''],
    });
  }


  onSignIn(){
      if(true){

        this.navCtrl.push(TabsPage, {user_id: 10});
      }
  }

  onPasswordForget(){
    console.log('Forget Password');
  }







}
