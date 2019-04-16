import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesProcuraPage } from './detalhes-procura';

@NgModule({
  declarations: [
    DetalhesProcuraPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesProcuraPage),
  ],
})
export class DetalhesProcuraPageModule {}
