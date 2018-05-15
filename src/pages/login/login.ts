import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';
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

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  
  }

  login() {
    console.log(this.username.value, this.password.value);

    var alert: Alert;

    if(this.username.value.indexOf('abby') > -1 && this.password.value.indexOf('abby') > -1){
      this.navCtrl.push(HomePage);      
    } else {
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        subTitle: 'Please verify your username and password and try again',
        buttons: ['OK']
      });
      alert.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.navCtrl.push(HomePage);
  }

}
