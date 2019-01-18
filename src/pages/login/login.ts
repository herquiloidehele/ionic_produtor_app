import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {AutenticacaoProvider} from "../../providers/autenticacao/autenticacao";
import {TabsPage} from "../modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../modulo-produtor/produtosrequsitados/produtosrequsitados";
import {InicioPage} from "../modulo-revendedor/inicio/inicio";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {LocalizacaoPage} from "../localizacao/localizacao";

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

  constructor() {}



}
