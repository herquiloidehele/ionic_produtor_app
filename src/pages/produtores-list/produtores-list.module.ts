import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoresListPage } from './produtores-list';

@NgModule({
  declarations: [
    ProdutoresListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoresListPage),
  ],
})
export class ProdutoresListPageModule {}
