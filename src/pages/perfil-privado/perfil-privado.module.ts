import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPrivadoPage } from './perfil-privado';

@NgModule({
  declarations: [
    PerfilPrivadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPrivadoPage),
  ],
})
export class PerfilPrivadoPageModule {}
