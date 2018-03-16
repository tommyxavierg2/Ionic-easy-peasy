import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginMenuPage } from '../pages/login-menu/login-menu';
import { ProductRequestPage } from '../pages/product-request/product-request';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { PaymentPage } from '../pages/payment/payment';
import { TransferPage } from '../pages/transfer/transfer';
 
import { UserProvider } from '../providers/user/user';
import axios from 'axios';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginMenuPage,
    ProductRequestPage,
    HomeTabsPage,
    PaymentPage,
    TransferPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginMenuPage,
    ProductRequestPage,
    HomeTabsPage,
    PaymentPage,
    TransferPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler, useValue: axios},
    UserProvider
  ]
})
export class AppModule {}
