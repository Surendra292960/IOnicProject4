import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms'
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  items;
  toggled: boolean;
  username:any;
  password:any;
  langs;
 langForm;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  constructor(public navCtrl:NavController){
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
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
 data={"user_details":[
   {
     "user_name":"",
     "password":"",
      "email":"",
      "phone":"",
    }
  ]};

 SignIn(){

  //console.log(this.data.user_details[0].user_name);
  console.log(this.data);
 }

 doSubmit(event) {
   console.log('Submitting form', this.langForm.value);
   event.preventDefault();
 }
}

