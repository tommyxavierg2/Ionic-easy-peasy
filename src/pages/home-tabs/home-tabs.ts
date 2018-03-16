import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';
import { TransferPage } from '../transfer/transfer';

@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {
  
  tabs = [
    { name: 'Inicio', component: HomePage, icon: 'home' },
    { name: 'Transferencias', component: TransferPage, icon: 'home' },
    { name: 'Pagos', component: PaymentPage, icon: 'home' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
