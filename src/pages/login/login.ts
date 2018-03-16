import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { HomeTabsPage } from '../home-tabs/home-tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
  }

  signIn() {
    this.navCtrl.parent.push(HomeTabsPage);
    /*this.userService.login(this.user)
      .then(res => {
        this.navCtrl.parent.push(HomePage)
        this.userService.displayToast(`Welcome ${res.firstName} ${res.lastName}`);
      })
    */
  }

}
