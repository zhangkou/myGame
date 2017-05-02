import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  topstart(){
    console.log("topstart")
  }

  topend(){
    console.log("topend")
  }

  bottomstart(){
    console.log("bottomstart")
  }

  bottomend(){
    console.log("bottomend")    
  }

  leftstart(){
    console.log("leftstart")
  }

  leftend(){
    console.log("leftend")    
  }

  rightstart(){
    console.log("rightstart")
  }

  rightend(){
    console.log("rightend")    
  }

}
