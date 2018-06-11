import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarParcementoPage } from './mostrar-parcemento';

@NgModule({
  declarations: [
    MostrarParcementoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarParcementoPage),
  ],
})
export class MostrarParcementoPageModule {}
