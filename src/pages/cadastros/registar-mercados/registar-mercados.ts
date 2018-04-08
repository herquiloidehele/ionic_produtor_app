import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
// import {Native Geocoder} from "@ionic-native/native-geocoder";


declare const  google: any;

@IonicPage()
@Component({
  selector: 'page-registar-mercados',
  templateUrl: 'registar-mercados.html',
})

export class RegistarMercadosPage {

  @ViewChild('map') mapElement: ElementRef;
  mapa: any;
  mapOptions: any;
  location : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    //Setting Default location
    this.location = new google.maps.LatLng(-25.958832, 32.577895);
  }


  ionViewDidLoad() {
    this.verMapa();
  }


  verMapa(){

    if(navigator.geolocation){
      this.getLocatlizacaoActual();
    }else{
      //Browser nao suporta Geolocation
      console.log('Browser nao suporta geoLocation');
    }


    this.mapOptions = {
      center: location,
      zoom: 10,
    };

    this.mapa = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

  }


  getLocatlizacaoActual(){
      navigator.geolocation.getCurrentPosition((positoin) =>{
        this.location = new google.maps.LatLng(positoin.coords.latitude, positoin.coords.longitude);
      })
  }






}
