import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LocationTabsPage } from '../pages/location-tabs/location-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  // Temp flag to set user is logged in or not.
  loggedIn: boolean = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // In the real world, you should only enable this function after one successful login. So that, you could identify the user.
      // TouchID just verifies the owner of the device, who is using it.
      if (this.loggedIn) {
        this.rootPage = LocationTabsPage;
        platform.resume.subscribe(() => {
          let modal = modalCtrl.create('LockScreen');
          modal.present();
        });
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

