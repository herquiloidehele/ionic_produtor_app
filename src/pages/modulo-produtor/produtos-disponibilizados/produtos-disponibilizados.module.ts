import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosDisponibilizadosPage } from './produtos-disponibilizados';

@NgModule({
  declarations: [
    ProdutosDisponibilizadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosDisponibilizadosPage),
  ],
})
export class ProdutosDisponibilizadosPageModule {}
