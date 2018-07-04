import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesOfertasPage } from './detalhes-ofertas';

@NgModule({
  declarations: [
    DetalhesOfertasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesOfertasPage),
  ],
})
export class DetalhesOfertasPageModule {}
