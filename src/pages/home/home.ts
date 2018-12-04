import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  constructor(public navCtrl:NavController){

  }


 initializeItems() {
   this.items = [
     'Amsterdam',
     'Bogota',
     'Buenos Aires',
     'Cairo',
     'Dhaka',
     'Edinburgh',
     'Geneva',
     'Genoa',
     'Glasglow',
     'Hanoi',
     'Hong Kong',
     'Islamabad',
     'Istanbul',
     'Jakarta',
     'Kiel',
     'Kyoto',
     'Le Havre',
     'Lebanon',
     'Lhasa',
     'Lima',
     'London',
     'Los Angeles',
     'Madrid',
     'Manila',
     'New York',
     'Olympia',
     'Oslo',
     'Panama City',
     'Peking',
     'Philadelphia',
     'San Francisco',
     'Seoul',
     'Taipeh',
     'Tel Aviv',
     'Tokio',
     'Uelzen',
     'Washington'
   ];
 }

 getItems(ev) {
   // Reset items back to all of the items
   this.initializeItems();

   // set val to the value of the ev target
   var val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.items = this.items.filter((item) => {
       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
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