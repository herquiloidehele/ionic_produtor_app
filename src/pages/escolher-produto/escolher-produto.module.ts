import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolherProdutoPage } from './escolher-produto';

@NgModule({
  declarations: [
    EscolherProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolherProdutoPage),
  ],
})
export class EscolherProdutoPageModule {}
