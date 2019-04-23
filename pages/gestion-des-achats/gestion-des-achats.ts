import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FacturationPopoverComponent } from '../../components/facturation-popover/facturation-popover';

@IonicPage()
@Component({
  selector: 'page-gestion-des-achats',
  templateUrl: 'gestion-des-achats.html',
})
export class GestionDesAchatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  goTo(page: string){
    this.navCtrl.push(page)
  }


  presentPopover() {
    let popover = this.popoverCtrl.create(FacturationPopoverComponent ,{}, {cssClass: 'facturation-popover'});
    popover.present();
  }

}
