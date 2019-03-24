import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevendedorProfilePage } from './revendedor-profile';

@NgModule({
  declarations: [
    RevendedorProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RevendedorProfilePage),
  ],
})
export class RevendedorProfilePageModule {}
