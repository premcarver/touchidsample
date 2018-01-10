import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';



/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  constructor(public viewCtrl: ViewController, private touchId: TouchID) {
  }

  ionViewDidEnter() {
    this.verify();
}

verify(){

    this.touchId.verifyFingerprint('Scan your fingerprint to unlock').then((res) => {
        this.viewCtrl.dismiss();
    }, (err) => {
        console.log(err);
        this.verify();
    });

}

}
