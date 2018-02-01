import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusProvider } from '../../providers/status/status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
green: boolean = false;
yellow: boolean = false;
red: boolean = false;

  constructor(public navCtrl: NavController, private statusProvider:StatusProvider) {
    let currentStatus = statusProvider.status;
       switch(currentStatus) {
        case "Green":
          this.green = true;
          this.yellow = false;
          break;
        case "Yellow":
          this.yellow = true;
          break;
        case "Red":
          this.red = true;
          break;
        default: 
          console.log('default');
       }
       
console.log('green: ' + this.green);
console.log('yellow: ' + this.yellow);
console.log('red: ' + this.red);
console.log('currentStatus: ' + currentStatus);
  }
}

