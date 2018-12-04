import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ELogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e-log',
  templateUrl: 'e-log.html',
})
export class ELogPage {

  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  constructor(public navCtrl:NavController){

  }

  onCancel(event){}
  public toggle(): void{
    this.toggled = this.toggled ? false : true;
  }

  
 getButtonText(): string {
   return `Switch ${ this.isOn ? 'Off' : 'On' }`;
 }
 setState(): void {
   this.isOn = !this.isOn;
 }

toggleDetails() {
   this.isOn = !this.isOn;
 }
}

