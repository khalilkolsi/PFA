import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gestion-des-fournisseurs',
  templateUrl: 'gestion-des-fournisseurs.html',
})
export class GestionDesFournisseursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionDesFournisseursPage');
  }

}
