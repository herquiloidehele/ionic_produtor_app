import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {OfertasProvider} from "../../../providers/ofertas/ofertas";
import {RegistarProdutosDisponibilizadosPage} from "../registar-produtos-disponibilizados/registar-produtos-disponibilizados";

/**
 * Generated class for the DisponibilizarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disponibilizar-produtos',
  templateUrl: 'disponibilizar-produtos.html',
})
export class DisponibilizarProdutosPage {


  ofertas: any[] = [];
  corBarra: any[] = [];
  private cores = ['#E874D8', '#00FF01', '#0013FE', '#00A3FF', '#FF6201', '#3CB371', '#1E90FF', '#FF1493', '#ad4330', '#590293', '#ED5A79'];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public ofertasProvider: OfertasProvider,
  ) {

  }

  ionViewDidLoad() {
    this.getMinhasOfertas();
  }


  ionViewDidEnter(){
    this.getMinhasOfertas();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  getMinhasOfertas(){
    let provider_id = JSON.parse(localStorage.getItem('user'))['id'];
    this.ofertasProvider.getMinhasOfertas(provider_id).subscribe(
      (response) => {
        this.ofertas = response['ofertas'];


        console.log(this.ofertas);

        for (let a = 1; a <= this.ofertas.length; a++){
          this.corBarra.push(this.gerarCores());
        }

        console.log(this.corBarra);

      },
      (erros) => {
        console.log(erros);
      },
      () => {console.log('busca de ofertas terminada com sucesso')}
    );
  }


  gerarCores(){
    let minimo = Math.ceil(0);
    let maximo = Math.floor(this.cores.length);

    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    return this.cores[aleatorio];
  }

  getData(data){
    console.log(data);
    let novaData = new Date(data);

    return novaData;
    // return new Intl.DateTimeFormat('us-GB').format(novaData);
  }

  adicionarProdutos(){
    this.navCtrl.push(RegistarProdutosDisponibilizadosPage);
  }









}
