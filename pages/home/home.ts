import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goTo(page: string){
    this.navCtrl.push(page)
  }
  

    public type = 'password';
    public showPass = false;
   
  
    showPassword() {
      this.showPass = !this.showPass;
        this.type = 'text';
    }
    hidePassword() {
      this.showPass = !this.showPass;
        this.type = 'password';
    }
  }

