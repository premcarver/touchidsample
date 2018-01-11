import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsOnMapPage } from './locations-on-map';

@NgModule({
  declarations: [
    LocationsOnMapPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsOnMapPage),
  ],
})
export class LocationsOnMapPageModule {}
