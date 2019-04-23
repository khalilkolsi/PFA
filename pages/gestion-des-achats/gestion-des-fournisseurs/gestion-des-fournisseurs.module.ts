import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionDesFournisseursPage } from './gestion-des-fournisseurs';

@NgModule({
  declarations: [
    GestionDesFournisseursPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionDesFournisseursPage),
  ],
})
export class GestionDesFournisseursPageModule {}
