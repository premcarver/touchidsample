import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LocationTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-tabs',
  templateUrl: 'location-tabs.html'
})
export class LocationTabsPage {

  listOfLocationsRoot = 'ListOfLocationsPage'
  locationsOnMapRoot = 'LocationsOnMapPage'


  constructor(public navCtrl: NavController) {}

}
