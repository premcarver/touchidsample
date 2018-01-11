import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LocationTabsPage } from '../pages/location-tabs/location-tabs';
import { GoogleMaps } from '@ionic-native/google-maps';


import { TouchID } from '@ionic-native/touch-id';
import { Device } from '@ionic-native/device';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LocationTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LocationTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TouchID,
    Device,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
