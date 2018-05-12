import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisponibilidadePage } from './disponibilidade';

@NgModule({
  declarations: [
    DisponibilidadePage,
  ],
  imports: [
    IonicPageModule.forChild(DisponibilidadePage),
  ],
})
export class DisponibilidadePageModule {}
