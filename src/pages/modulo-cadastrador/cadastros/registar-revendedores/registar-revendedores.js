var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
/**
 * Generated class for the RegistarRevendedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistarRevendedoresPage = /** @class */ (function () {
    function RegistarRevendedoresPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    RegistarRevendedoresPage.prototype.processWebImage = function (event) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            // let imageData = (readerEvent.target as any).result;
            // this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    RegistarRevendedoresPage.prototype.getPicture = function () {
        if (Camera['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    RegistarRevendedoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistarRevendedoresPage');
    };
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], RegistarRevendedoresPage.prototype, "fileInput", void 0);
    RegistarRevendedoresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-revendedores',
            templateUrl: 'registar-revendedores.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Camera])
    ], RegistarRevendedoresPage);
    return RegistarRevendedoresPage;
}());
export { RegistarRevendedoresPage };
//# sourceMappingURL=registar-revendedores.js.map