import {Component} from '@angular/core';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the RootProdutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root-produtor',
  templateUrl: 'root-produtor.html',
})
export class RootProdutorPage {


  user: any;
  tipoUser: any;

    constructor(
                public navParams: NavParams,
                public viewCtrl: ViewController
    ) {
    }



}
