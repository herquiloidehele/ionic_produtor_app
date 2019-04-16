import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadoPage } from './mercado';
import {HideHeaderDirective} from "../../directives/hide-header/hide-header";

@NgModule({
  declarations: [
    MercadoPage
  ],
  imports: [
    IonicPageModule.forChild(MercadoPage),
  ],
})
export class MercadoPageModule {}
