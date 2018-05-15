import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SymptomsPage } from '../symptoms/symptoms';
import { ProvidersPage } from '../providers/providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private camera: Camera, private menuCtrl: MenuController) {

  }

  goToHome() {
    this.menuCtrl.close();
  }

  goToSymptoms() {
    this.navCtrl.push(SymptomsPage);
  }

  goToProviders() {
    this.navCtrl.push(ProvidersPage);
  }

  goToCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
