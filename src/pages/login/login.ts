import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

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
              // private logger: LoggerService
  ) {

    this.credentialsForm = this.formBuilder.group({
      username: [''],
      senha: [''],
    });
  }



  onSignIn(){
    console.log('Login efectuado');
  }

  onPasswordForget(){
    console.log('Forget Password');
  }







}
