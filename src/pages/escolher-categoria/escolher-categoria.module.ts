import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolherCategoriaPage } from './escolher-categoria';

@NgModule({
  declarations: [
    EscolherCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolherCategoriaPage),
  ],
})
export class EscolherCategoriaPageModule {}
