import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';







@IonicPage()
@Component({
  selector: 'page-registar-mercados',
  templateUrl: 'registar-mercados.html',
})

declare const google;

export class RegistarMercadosPage {

  @ViewChild('map') mapElement: ElementRef;
  mapa: any;
  mapOptions: any;
  location : any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform)
  {

      platform.ready().then(
          () => {
              console.log('O Mapa ja pode ser mostrado');
            this.inicializarMapa();
          }
      );

  }

    inicializarMapa(){

      this.mapOptions = {
        camera: {
          target : {
            lat: -23.949181,
            lng: -32.598581,
          },
          zoom: 18,
          tilt: 30
        }
      };

      this.mapa = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    }



  // inicializarMapa() {
  //
  //     // GoogleMapOptions.
  //
  //     let mapOptions: GoogleMapOptions = {
  //         camera: {
  //             target: {
  //                 lat: 43.0741904,
  //                 lng: -89.3809802
  //             },
  //             zoom: 18,
  //             tilt: 30
  //         }
  //     };
  //
  //     this.mapa = GoogleMaps.create('map', mapOptions);
  //
  //     // Wait the MAP_READY before using any methods.
  //     this.mapa.one(GoogleMapsEvent.MAP_READY)
  //         .then(() => {
  //             console.log('Map is ready!');
  //
  //             // Now you can use all methods safely.
  //             this.mapa.addMarker({
  //                 title: 'Ionic',
  //                 icon: 'blue',
  //                 animation: 'DROP',
  //                 position: {
  //                     lat: 43.0741904,
  //                     lng: -89.3809802
  //                 }
  //             })
  //                 .then(marker => {
  //                     marker.on(GoogleMapsEvent.MARKER_CLICK)
  //                         .subscribe(() => {
  //                             alert('clicked');
  //                         });
  //                 });
  //
  //         });
  // }




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
