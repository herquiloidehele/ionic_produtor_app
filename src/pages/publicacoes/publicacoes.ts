import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {RegistarOpertasPage} from "../registar-opertas/registar-opertas";
import {ViewPublicacaoPage} from "../view-publicacao/view-publicacao";
import {Storage} from "@ionic/storage";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

@IonicPage()
@Component({
  selector: 'page-publicacoes',
  templateUrl: 'publicacoes.html',
})
export class PublicacoesPage {

  protected publicacoes;
  protected publicacoesCopy;
  protected hideTabs = true;
  protected showSearch = false;
  protected loader = true;

  protected sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 0,
    centeredSlides: true
  };



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ofertasProvider: OfertasProvider,
    public storageController: Storage,
    public urlApiProvider: UrlapiProvider
    ) {

  }

  ionViewWillEnter(){
    this.getMinhasPublicacoes();
  }


  protected onInput(event){
    this.publicacoes = this.publicacoesCopy;

    this.publicacoes = this.publicacoes.filter((publicacao) => {
      return (publicacao.produto.designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()));
    });
  }

  protected onBlur(){
    this.changeShowSearch();
  }

  protected onCancel(){
    console.log('cancelado');
    this.changeShowSearch();
  }


  protected goToRegistarOfertas(){
    this.navCtrl.push(RegistarOpertasPage);
  }

  protected viewPublicacao(publicacao){
    this.navCtrl.push(ViewPublicacaoPage, {publicacao: publicacao});
  }

  protected getMinhasPublicacoes(){
    this.storageController.get('user').then((user) => {
      this.ofertasProvider.getOfertas(user['id']).subscribe((response)=> {
          console.log(response);
          this.publicacoes = response['ofertas'];
          this.publicacoesCopy = response['ofertas'];
          this.storageController.set('publicacoes', this.publicacoes);
        },
        (error) => {
          console.log(error);
          this.getOfertasLocais();
        });
    }).catch((error) => {
      console.log({erro: error});
    });

    this.loader = false;
  }


  protected getOfertasLocais(){
    this.storageController.get('publicacoes').then((publicacoes) => {
      this.publicacoes = publicacoes;
    }).catch((error) => {
      console.log(error);
    });
  }


  protected changeShowSearch(){
    this.showSearch = !this.showSearch;
  }


}
