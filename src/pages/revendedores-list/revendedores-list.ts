import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerfilRevendedorPage} from "../modulo-revendedor/perfil-revendedor/perfil-revendedor";
import {RevendedorProvider} from "../../providers/revendedor/revendedor";

/**
 * Generated class for the RevendedoresListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revendedores-list',
  templateUrl: 'revendedores-list.html',
})
export class RevendedoresListPage {

  
  protected revendedores = [];
  protected revendedoresCopy = [];
  protected loader = true;
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public revendedorProvider: RevendedorProvider
  ) {
  }

  ionViewDidLoad() {
    this.revendedorProvider.getAll().subscribe(
      (response) => {
        this.revendedores = response ['revendedores'];
        this.revendedoresCopy = response ['revendedores'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loader = false;
      }
    );
  }

  onInput(event){
    this.revendedores = this.revendedoresCopy;

    if(event.target.value.trim() != '' || event.target.value.trim() != null)
      this.revendedores = this.revendedores.filter((produtor) => {
        return (produtor['user']['nome'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
          (produtor['mercado']['distrito']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1) ||
          (produtor['mercado']['distrito']['provincia']['designacao'].trim().toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1)
      });

  }

  viewProfile(revendedor){
    this.navCtrl.push(PerfilRevendedorPage, {revendedor: revendedor});
  }

}
