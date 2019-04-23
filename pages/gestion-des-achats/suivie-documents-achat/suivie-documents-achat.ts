import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-suivie-documents-achat',
  templateUrl: 'suivie-documents-achat.html',
})
export class SuivieDocumentsAchatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  openMenu() {
    if(this.menuCtrl["_menus"]["0"]["isOpen"]){
      this.menuCtrl.close();
    }else {
      this.menuCtrl.open();
    }
    
  }

}
