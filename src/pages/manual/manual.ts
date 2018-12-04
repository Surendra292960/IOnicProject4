import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {


  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  cards: any;
  category: string = 'gear';

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
