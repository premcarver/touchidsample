import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfLocationsPage } from './list-of-locations';

@NgModule({
  declarations: [
    ListOfLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfLocationsPage),
  ],
})
export class ListOfLocationsPageModule {}
