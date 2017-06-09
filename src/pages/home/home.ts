import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  activities: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, angFire: AngularFireDatabase, public alertCtrl: AlertController) {
    this.activities = angFire.list('/Activities');
  }

  addActivity(): void {
    let prompt = this.alertCtrl.create({
      title: "Add Activity",
      inputs: [
        {
          name: 'title',
          placeholder: 'Activity Title',
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.activities.push({
              title: data.title
            })
          }
        }
      ]
    })

    prompt.present();
  }

}
