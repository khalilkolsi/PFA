import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheFournisseurPage } from './fiche-fournisseur';

@NgModule({
  declarations: [
    FicheFournisseurPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheFournisseurPage),
  ],
})
export class FicheFournisseurPageModule {}
