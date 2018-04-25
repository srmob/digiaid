import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-recordings',
  templateUrl: 'recordings.html'
})
export class RecordingsPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }
  
  transClicked(){
    console.log ("transcribe email clicked ");
    let modal = this.modalCtrl.create(DetailsPage);
    modal.present();
  }
}
