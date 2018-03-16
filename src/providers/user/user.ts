import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import axios from 'axios';
axios.defaults.baseURL = '';

@Injectable()
export class UserProvider {

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController) {}

  displayToast(msg) {
    let alert = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    alert.present();
  }

  displayAlert(atitle, asub) {
    let alert = this.alertCtrl.create({
      title: atitle,
      subTitle: asub,
      buttons: ['Ok']
    });
    alert.present();
  }

  logout() {
   /* return this.afauth.auth.signOut()
      .then(loggedOut => this.displayAlert('Logged out', 'Come visit soon'))
      .catch(err => this.displayAlert('Error logging out', err)); */
  }

  login(user) {
    return axios.get(`users?email=${user.email}&password=${user.password}`)
    .then(res => sessionStorage.setItem('userData', res.data))
    .catch(err => this.displayAlert("Error", err));
  }

  performPayment() {

  }

  performTransaction() {

  }

}
