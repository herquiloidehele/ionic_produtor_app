import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeGeocoder, NativeGeocoderReverseResult} from "@ionic-native/native-geocoder";

/**
 * Generated class for the RegistarMercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-mercados',
  templateUrl: 'registar-mercados.html',
})
export class RegistarMercadosPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public getCoder: NativeGeocoder, public alertController: AlertController) {
  }


  ionViewDidLoad() {
    this.viewMap();
  }


  viewMap(){
  //  Definindo uma localizacao com base nas coordenadas
    let location = new google.maps.LatLng(-25.958832, 32.577895);

    const options = {
      center: location,
      zoom: 10,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

  }


}
