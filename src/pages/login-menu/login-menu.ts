import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ProductRequestPage } from '../product-request/product-request';

@Component({
  selector: 'page-login-menu',
  templateUrl: 'login-menu.html',
})
export class LoginMenuPage {
  @ViewChild(Nav) menuNavCtrl: Nav;

  rootPage: any = LoginPage;
  options = [
    { title: 'Login', component: LoginPage },
    { title: 'Solicitar producto', component: ProductRequestPage },
    { title: 'About' }  
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menuNavCtrl.setRoot(page.component);
  }

}
