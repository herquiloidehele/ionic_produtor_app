import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarProdutosPage } from './adicionar-produtos';

@NgModule({
  declarations: [
    AdicionarProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarProdutosPage),
  ],
})
export class AdicionarProdutosPageModule {}
