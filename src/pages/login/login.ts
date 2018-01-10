import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // To set a flag (by default false or undefined) got avaialbility of TouchID
  private touchIdAvailable: boolean;
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private touchId: TouchID, private platform: Platform
  ) {

    this.platform.ready().then(() => {
        this.touchId.isAvailable()
        .then(
          res => {
            console.log('TouchID is available!');
            this.touchIdAvailable = true
           },
          err => {
            console.error('TouchID is not available', err);
            this.touchIdAvailable = false
          });          
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // In the real world, you should only enable this function after one successful login. So that, you could identify the user.
  // TouchID just verifies the owner of the device, who is using it.
  private startTouchID () {
      this.touchId.verifyFingerprint('Scan your fingerprint please')
      .then(
        res => {
          console.log('Ok', res);
          this.navCtrl.push("");
        },
        err => console.error('Error', err)
      );
  }
}
