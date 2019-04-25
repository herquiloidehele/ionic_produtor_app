import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {ProdutoresProvider} from "../../providers/produtores/produtores";
import {PerfilPublicoPage} from "../perfil-publico/perfil-publico";

/**
 * Generated class for the ProdutoresListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtores-list',
  templateUrl: 'produtores-list.html',
})
export class ProdutoresListPage {


  protected produtores = [];
  protected produtoresCopy = [];
  protected loader = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public urlApi: UrlapiProvider,
    public produtorProvider: ProdutoresProvider
  ) {
  }

  ionViewDidLoad() {
    this.produtorProvider.getAll().subscribe(
      (response) => {
        this.produtores = response['produtores'];
        this.produtoresCopy = response['produtores'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loader = false;
      }
    );
  }


  public goToProfile(produtor_id){
    this.navCtrl.push(PerfilPublicoPage, {produtor_id: produtor_id});
  }


  onInput(event){
    this.produtores = this.produtoresCopy;

    if(event.target.value.trim() != '' || event.target.value.trim() != null)
      this.produtores = this.produtores.filter((produtor) => {
        return (produtor['user']['nome'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
               (produtor['distrito']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
               (produtor['distrito']['provincia']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1)
      });

  }
}
