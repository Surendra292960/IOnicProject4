import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-click',
  templateUrl: 'click.html',
})
export class ClickPage {
  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for(let i = 0; i < 10; i++ ){
      this.data.push({
        title: 'Title '+i,
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }
  }
  toggleDetails1(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'ios-add-circle-outline';
    } else {
      data.showDetails = true;
      data.icon = 'ios-remove-circle-outline';
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
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
   console.log("Clicked");
 }


 toggleDetails2() {
  this.isOn = !this.isOn;
}
}
