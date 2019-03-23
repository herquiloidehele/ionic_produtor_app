import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadoDetailsPage } from './mercado-details';

@NgModule({
  declarations: [
    MercadoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MercadoDetailsPage),
  ],
})
export class MercadoDetailsPageModule {}
