import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTabsMenuPage } from './home-tabs-menu';

@NgModule({
  declarations: [
    HomeTabsMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTabsMenuPage),
  ],
})
export class HomeTabsMenuPageModule {}
