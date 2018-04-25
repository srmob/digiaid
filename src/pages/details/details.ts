import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
/*
  Generated class for the Cal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  constructor(public navCtrl: NavController, public viewCtrl:ViewController, public navParams:NavParams) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
