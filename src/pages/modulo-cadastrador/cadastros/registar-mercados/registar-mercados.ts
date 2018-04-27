import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MercadoProvider} from "../../../../providers/mercado/mercado";

/**
 * Generated class for the RegistarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare const google;

@IonicPage()
@Component({
  selector: 'page-registar-mercados',
  templateUrl: 'registar-mercados.html',
})
export class RegistarMercadosPage{


  mercados: any[] = [];


  @ViewChild('map') mapElement: ElementRef;
  mapa: any;
  mapOptions: any;
  location : any;
  isMercadoIconSelected: boolean;
  mercadoiconName : any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mercadoProvider: MercadoProvider,
              public alertController: AlertController) {
    this.isMercadoIconSelected = false;
    this.mercadoiconName = 'basket';


  }

  ionViewDidLoad(){
    this.buscarMercados();
  }


  onClickAdicionar(){
    if(this.isMercadoIconSelected){
      this.mercadoiconName = 'basket';
      this.isMercadoIconSelected = false;
    }else{
      this.mercadoiconName = 'ios-close';
      this.isMercadoIconSelected = true;
    }

  }


  /**
   * Adiciona uma marcacao com uma deteminada Imagem
   * @param coordendas
   * @param {String} marquerName
   * @returns {google.maps.Marker}
   */
  adicionarMarkerWithImage(coordendas, marquerName: String, imagem, draggable = false){
    return new google.maps.Marker({
      position: coordendas,
      map: this.mapa,
      title: marquerName,
      icon: imagem,
      draggable: draggable,
    })
  }



  inicializarMapa(){

    this.mapOptions = this.criarOptions({lat: -25.950072, lng: 32.601413}, 10);
    this.mapa = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.rendenrizarMercados();

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (response) => {
          let coordenadas = {
            lat: response.coords.latitude,
            lng: response.coords.longitude
          };

          this.addMessage(coordenadas, 'Minha Posicao');
          this.mapa.setCenter(coordenadas);
          this.adicionarMarker(coordenadas, 'Eu');

        },

        (errorResponse) => {
          console.log(errorResponse);
        }
      );


      this.googleMapsEvents();


    }else
      console.log('Pegar a localizacao Actual');
  }


  /**
   * Criar Opcoes Iniciais do Map
   * @param {{lat: any; lng: any}} coordenadas
   * @param {number} zoom
   * @returns {{center: google.maps.LatLng; zoom: number}}
   */
  criarOptions(coordenadas: {lat: any, lng: any}, zoom: number){
     let localizacao = new google.maps.LatLng(
      {
        lat: coordenadas.lat,
        lng: coordenadas.lng
      }
      );

     return {
       center: localizacao,
       zoom: zoom
     };

  }


  /**
   * Adiciona uma marcacao no mapa
   * @param coordendas
   * @param {String} marquerName
   * @returns {google.maps.Marker}
   */
  adicionarMarker(coordendas, marquerName: String){
    return new google.maps.Marker({
      position: coordendas,
      map: this.mapa,
      title: marquerName,
    })
  }



  /**
   * Adiciona uma mensagem num determinado ponto
   * @param posicao
   * @param mensagem
   */
  addMessage(posicao, mensagem, ){
    let infoWindow = new google.maps.InfoWindow;
    infoWindow.setPosition(posicao);
    infoWindow.setContent(mensagem);
    infoWindow.open(this.mapa);
  }


  /**
   * Adiciona uma conjunto de eventos no mapa
   */
  googleMapsEvents(){
    this.mapa.addListener('click', (event) => {
      if(this.isMercadoIconSelected) {
        this.mostrarPrompt(event);
      }
    });
  }


  mostrarPrompt(coordenadas){
    this.alertController.create({
      title: 'Registar Mercado',
      message: 'Introduza o nome do Mercado',
      buttons: [
        {
          text: 'CANCELAR',
          handler: () => {
            console.log('cancelado');
          },
        },

        {
          text: 'SALVAR',
          handler: (dados) => {
            let mercado = {
              designacao: dados.designacao,
              longitude:coordenadas.latLng.lng(),
              latitude: coordenadas.latLng.lat(),
            };

            console.log(mercado);
            this.salvarMercado(mercado, coordenadas);
          }
        }
      ],
      inputs: [
        {
          name: 'designacao',
          placeholder: 'Nome do Mercado'
        }
      ]
    }).present();
  }


  salvarMercado(mercado, event){
    this.mercadoProvider.salvar(mercado).subscribe(
      (response) => {
        console.log(response);
        let imagem = '../../../../assets/imgs/map-mercado-icon.svg';
        let mercado = response.mercado;
        this.adicionarMarkerWithImage(event.latLng, mercado.designacao, imagem, true);
        this.addMessage({lat: event.latLng.lat(), lng: event.latLng.lng()}, mercado.designacao);
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        console.log('Complete save mercado');
      }
    );
  }



  buscarMercados(){
    this.mercadoProvider.getAll().subscribe(
      (response) => {
        this.mercados = response.mercados;
      },
      (erros) => {
        console.log(erros);
      },
      () =>{
        this.inicializarMapa();
        console.log('Busaca de mercados end.');
      }
    );
  }


  rendenrizarMercados(){
    for (let mercado of this.mercados){
      let imagem = '../../../../assets/imgs/map-mercado-icon.svg';
      if(mercado.localizacao.latitude != null && mercado.localizacao.longetude != null) {
        this.adicionarMarkerWithImage({lat: mercado.localizacao.latitude, lng: mercado.localizacao.longetude}, mercado.designacao, imagem);
        this.addMessage({lat: mercado.localizacao.latitude, lng: mercado.localizacao.longetude}, mercado.designacao);
      }
    }
  }








}
