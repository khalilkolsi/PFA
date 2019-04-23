import { Component } from '@angular/core';

/**
 * Generated class for the FacturationPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facturation-popover',
  templateUrl: 'facturation-popover.html'
})
export class FacturationPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello FacturationPopoverComponent Component');
    this.text = 'Hello World';
  }

}
