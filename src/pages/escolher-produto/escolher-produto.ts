import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonProvider} from "../../providers/json/json";
import {PerfilPage} from "../perfil/perfil";

@IonicPage()
@Component({
  selector: 'page-escolher-produto',
  templateUrl: 'escolher-produto.html',
})
export class EscolherProdutoPage {


  protected produtos = [];
  protected chekboxIds = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonProvider: JsonProvider) {
    this.getProdutos();
  }



  public getProdutos(){
    this.jsonProvider.getProdutos().subscribe(
      (response) => {
        this.produtos = response['produtos'];
        console.log(this.produtos);
      },
      (error) => {console.log(error)},
      () => {console.log('Complete Produtos')}
    );
  }

  public getIMG(categoria){
    switch (categoria) {
      case 'Frutas' : return '../../assets/icon/categorias/fruits1.svg';
      case 'Legumes' : return '../../assets/icon/categorias/legumes1.svg';
      case 'Verduras' : return '../../assets/icon/categorias/vegetables1.svg';
      case 'Grãos e Cereais' : return '../../assets/icon/categorias/cereals1.svg';
      default: return '';
    }

  }

  onClickProximo(){
    this.navCtrl.setRoot(PerfilPage);
  }

  check(idCheck){
    if(this.isChecked(idCheck))
      this.chekboxIds.splice(this.chekboxIds.indexOf(idCheck),1);
    else
      this.chekboxIds.push(idCheck);
    console.log(this.chekboxIds);
  }

  isChecked(idCheck){
    return this.chekboxIds.indexOf(idCheck) != -1;
  }


}
