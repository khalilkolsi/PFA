import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionDesAchatsPage } from './gestion-des-achats';

@NgModule({
  declarations: [
    GestionDesAchatsPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionDesAchatsPage),
  ],
})
export class GestionDesAchatsPageModule {}
