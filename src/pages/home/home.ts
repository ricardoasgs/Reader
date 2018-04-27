import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import Tesseract from 'tesseract.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public src = "assets/imgs/teste.jpg";
  public output = "a";
  public test = undefined;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  pick() {
    const options: CameraOptions = {
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.src = imageData;
    }, (err) => {
      console.log(err);
    });
  }
  analizar() {
    Tesseract.recognize(this.src,{
      lang: 'por',
    })
      .then(function (result, test) { 
        console.log('result is: ', result.text)
        test = result.text;
        this.test = test;
      })
  }
}
