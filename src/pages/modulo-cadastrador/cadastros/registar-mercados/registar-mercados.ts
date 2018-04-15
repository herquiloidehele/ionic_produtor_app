import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation"
import {GoogleMap, GoogleMapOptions, GoogleMaps} from "@ionic-native/google-maps"


@IonicPage()
@Component({
  selector: 'page-registar-mercados',
  templateUrl: 'registar-mercados.html',
})

export class RegistarMercadosPage {

  @ViewChild('map') mapElement: ElementRef;
  mapa: GoogleMap;
  mapOptions: any;
  location : any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              private googleMapsService: GoogleMaps,
              private geolocationService: Geolocation)
  {
      // this.location = new google.maps.LatLng(parseFloat('-23.949181'), parseFloat('-32.598581'));
      //android
      // AIzaSyBzh6Mxk7XcOCCkEk5BTwa2fP3XV77VnzM
  //    IOS

  }


  ngAfterViewInit(){
      this.inicializarMapa();
  }



  inicializarMapa(){

    // GoogleMapOptions.

      this.mapa = GoogleMaps.create(this.mapElement.nativeElement);
  }


  // verMapa(){
  //
  //   if(navigator.geolocation){
  //     this.getLocatlizacaoActual();
  //   }else{
  //     //Browser nao suporta Geolocation
  //     console.log('Browser nao suporta geoLocation');
  //
  //
  //       this.mapOptions = {
  //           center: this.location,
  //           zoom: 10,
  //       };
  //
  //       this.mapa =  this.googleMapsService.create(this.mapElement.nativeElement, this.mapOptions);
  //
  //   }
  //
  //
  //
  // }


  // getLocatlizacaoActual(){
  //     navigator.geolocation.getCurrentPosition((positoin) =>{
  //       this.location = new google.maps.LatLng(positoin.coords.latitude, positoin.coords.longitude);
  //
  //         this.mapOptions = {
  //             center: this.location,
  //             zoom: 10,
  //         };
  //
  //         this.mapa = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  //
  //
  //         let marker = new google.maps.Marker({
  //            position: this.location,
  //             map: this.mapa,
  //             title: 'EU'
  //         });
  //
  //
  //     })
  // }






}
