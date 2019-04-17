import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoSelectPage } from './produto-select';

@NgModule({
  declarations: [
    ProdutoSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoSelectPage),
  ],
})
export class ProdutoSelectPageModule {}
