import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';

import { ProductRequestPage } from '../product-request/product-request';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { PaymentPage } from '../payment/payment';
import { TransferPage } from '../transfer/transfer';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home-tabs-menu',
  templateUrl: 'home-tabs-menu.html',
})
export class HomeTabsMenuPage {
  @ViewChild(Nav) menuNavCtrl: Nav;
  rootPage: any = HomeTabsPage;
  options = [
    { title: 'Inicio', component: HomeTabsPage },
    { title: 'Transferencias', component: TransferPage },
    { title: 'Pagos', component: PaymentPage }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
  }

  openPage(tabIndex) {
    this.menuNavCtrl.getActiveChildNav().select(tabIndex);
  }

  logout() {
    this.userService.logout();
  }

}
