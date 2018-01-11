import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationTabsPage } from './location-tabs';

@NgModule({
  declarations: [
    LocationTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationTabsPage),
  ]
})
export class LocationTabsPageModule {}
