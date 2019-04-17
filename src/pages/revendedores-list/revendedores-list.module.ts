import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevendedoresListPage } from './revendedores-list';

@NgModule({
  declarations: [
    RevendedoresListPage,
  ],
  imports: [
    IonicPageModule.forChild(RevendedoresListPage),
  ],
})
export class RevendedoresListPageModule {}
