import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the RegistarRevendedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-revendedores',
  templateUrl: 'registar-revendedores.html',
})
export class RegistarRevendedoresPage {
  @ViewChild('fileInput') fileInput;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      // let imageData = (readerEvent.target as any).result;
      // this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }


  getPicture() {
    // if (Camera['installed']()) {
    //   this.camera.getPicture({
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     targetWidth: 96,
    //     targetHeight: 96
    //   }).then((data) => {
    //     // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
    //   }, (err) => {
    //     alert('Unable to take photo');
    //   })
    // } else {
    //   this.fileInput.nativeElement.click();
    // }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistarRevendedoresPage');
  }


}
