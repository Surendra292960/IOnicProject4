import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { RequisitionPage } from '../pages/requisition/requisition';
import { TicketsPage } from '../pages/tickets/tickets';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SettingPage } from '../pages/setting/setting';
import { ManualPage } from '../pages/manual/manual';
import { CollaborationPage } from '../pages/collaboration/collaboration';
import { ELogPage } from '../pages/e-log/e-log';
import { SearchPage } from '../pages/search/search';
import { ClickPage } from '../pages/click/click';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon:string, component: any}>;
  pages1: Array<{title: string, icon:string, component: any}>;
  pages2: Array<{title: string, icon:string,component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menu:MenuController) {
    this.initializeApp();
    menu.enable(false,"menu3");

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Requisition', icon:'document', component: RequisitionPage },
      { title: 'Home', icon:'home', component: HomePage },
      { title: 'Tickets', icon:'md-copy', component: TicketsPage }, 
      { title: 'Map', icon:'md-locate', component: MapPage }, 
      { title: 'Collaboration', icon:'md-chatbubbles', component: CollaborationPage },     
      { title: 'E-Log', icon:'md-clipboard', component: ELogPage },
      { title: 'Search', icon:'md-clipboard', component: SearchPage } ,
      { title: 'Click', icon:'md-clipboard', component: ClickPage }  
          

    ];

    this.pages1 = [
      { title: 'Setting', icon:'settings', component: SettingPage },
      { title: 'Manual', icon:'ios-help-circle-outline', component: ManualPage },
      { title: 'SignOut', icon:'md-create', component: SignOutPage }
    ];

    this.pages2 = [
      { title: 'Notifications', icon:'settings', component: SignOutPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title==="Setting")
    {
      this.menu.enable(true,"menu3");
      this.menu.open("menu3");
      console.log("menu3");
    }
     else if( page.title=="Notifications")
     {
       this.menu.enable(true,"menu4");
       this.menu.open("menu4");
     }
     else
     {
     this.menu.close();
     this.menu.enable(false,"menu3");  
     this.nav.setRoot(page.component);
     this.menu.open("menu3");
     }    
  }
  menu_close(page)
  {
    this.menu.enable(true,"menu2");
    this.menu.open("menu2");
    this.nav.popToRoot();
  }
  menu_close2(page)
  {
    this.menu.enable(true,"menu3");
    this.menu.open("menu3");
    this.nav.popToRoot();
  }
}
