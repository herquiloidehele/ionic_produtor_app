import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosDoMercadosPage } from './produtos-do-mercados';

@NgModule({
  declarations: [
    ProdutosDoMercadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosDoMercadosPage),
  ],
})
export class ProdutosDoMercadosPageModule {}
