import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MercadoProvider} from "../../providers/mercado/mercado";
import {MercadoDetailsPage} from "../mercado-details/mercado-details";



@IonicPage()
@Component({
  selector: 'page-mercados',
  templateUrl: 'mercado.html',
})
export class MercadoPage {

  protected mercados: any[];
  protected mercadosCopy: any[];
  protected showSearch: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mercadoProvider: MercadoProvider) {
  }


  ionViewDidLoad(){
    this.getAll();
  }

  getAll(){
    this.mercadoProvider.getAll().subscribe(
      (resultado) => {
        this.mercados = resultado['mercados'];
        this.mercadosCopy = resultado['mercados'];
        console.log(resultado);
      },
      (erros) => {
        console.log(erros);
      },
      () =>{
        console.log('Busca de Mercados Terminada');
      }
    )
  }


  showMercado(mercado){
    this.navCtrl.push(MercadoDetailsPage, {mercado: mercado});
  }


  protected onInput(event){
    this.mercados = this.mercadosCopy;

    this.mercados = this.mercados.filter((mercado, indice) => {
      return (mercado.designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
    });
  }

  protected onBlur(){
    this.changeShowSearch();
  }

  protected onCancel(){
    console.log('cancelado');
    this.changeShowSearch();
  }

  protected changeShowSearch(){
    this.showSearch = !this.showSearch;
  }



}
