import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusProvider } from '../../providers/status/status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
green:boolean = false;
yellow: boolean = true;
red: boolean = false;

  constructor(public navCtrl: NavController, private statusProvider:StatusProvider) {
    let newStatus = statusProvider.status;
       switch(newStatus) {
        case "Green":
          let green = true;
          break;
        case "Yellow":
          let yellow = true;
          break;
        case "Red":
          let red = true;
          break;
        default: 
          let green = true;
       }
       
console.log('green: ' + green);
console.log('yellow: ' + yellow);
console.log('red: ' + red);
console.log('newStatus: ' + newStatus);
  }
}

