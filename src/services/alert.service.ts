import { Injectable } from '@angular/core';
import {AlertController,ToastController } from 'ionic-angular';

@Injectable()
export class AlertService {

  alertPopup:any;
  toast:any;
  alertPresent:boolean=false;

  constructor(public alertCtrl: AlertController, public toastCtrl : ToastController) {

  }


  alertPrompt(title,subTitle) : Promise<any> {
      this.alertPopup = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        // buttons: [{
        //   text: 'Ok',
        //   handler: () => {
        //     // user has clicked the alert button
        //     // begin the alert's dismiss transition
        //   let navTransition = alert.dismiss();
        //   }]
      });
      return this.alertPopup.present();
  }


  presentToast(msg) : Promise<any> {
    this.toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    return this.toast.present();
}
  // closePopup :() => {
  //   return this.alertPopup.dismiss();
  // }
}
