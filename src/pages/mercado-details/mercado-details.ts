import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Segment} from 'ionic-angular';
import {RevendedorProfilePage} from "../revendedor-profile/revendedor-profile";

@IonicPage()
@Component({
  selector: 'page-mercado-details',
  templateUrl: 'mercado-details.html',
})
export class MercadoDetailsPage {


  protected mercado ;
  protected titulos = "Revendedores";


  @ViewChild(Content) protected content: Content;
  @ViewChild('ion_segment') protected divElementTabs: HTMLDivElement;
  @ViewChild('divElment') protected divElementOptions: HTMLDivElement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mercado = this.navParams.get('mercado');
  }


  segmentChanged(evento){
    this.content.scrollTo(0, 190);
  }


  onScroll(event){
    console.log(event);

    // if(this.content.scrollTop > 150){
    //   this.divElementTabs.style.position =  'fixed';
    //   this.divElementTabs.style.top = '0';
    // }else{
    //   this.divElementTabs.style.position = 'absolute';
    //   this.divElementOptions.style.top = '150';
    // }



  }

  onScrollStart(){
    console.log("Scroll Iniciou");
  }

  onScrollEnd(){
    console.log("Scroll Terminou");
  }


  goToRevendedor(revendedor, distrito){
    this.navCtrl.push(RevendedorProfilePage, {revendedor: revendedor, distrito: distrito});
  }


  voltar(){
    this.navCtrl.pop();
  }
}
