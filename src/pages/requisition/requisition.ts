import { Component,ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';


@IonicPage()
@Component({
  selector: 'page-requisition',
  templateUrl: 'requisition.html',
})
export class RequisitionPage implements OnInit {
  m:any;p:any;s:any;v:any;y:any;z2:any;
  n:any;q:any;t:any;w:any;z:any;z3:any;
  o:any;r:any;u:any;x:any;z1:any;
  @ViewChild('myInput') myInput;
  resize() {
      var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  ngOnInit(){

    
  }

  items;
  toggled: boolean;
  private isOn: boolean = false;
  public isSearchbarOpend = false;
  note: string = "My Default Text";
  constructor(public navCtrl:NavController, private datePicker: DatePicker){

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
  demo1(){
    console.log(this.m);
    console.log(this.n);
    console.log(this.o);
    console.log(this.q);
    console.log(this.s);
    console.log(this.t);
    console.log(this.u);
    console.log(this.v);
    console.log(this.w);
    console.log(this.x);
    console.log(this.y);
    console.log(this.z);
    console.log(this.z1);
    console.log(this.z2);
    console.log(this.z3);
  }
}