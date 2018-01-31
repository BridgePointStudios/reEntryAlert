import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusProvider } from '../../providers/status/status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private statusProvider:StatusProvider) {
    console.log('Home Component');
    let newStatus = statusProvider.status;
    return newStatus;
  }

}
