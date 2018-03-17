import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeTabsMenuPage } from '../pages/home-tabs-menu/home-tabs-menu';
import { LoginPage } from '../pages/login/login';
import { LoginMenuPage } from '../pages/login-menu/login-menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomeTabsMenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

