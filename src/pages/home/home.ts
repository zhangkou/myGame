import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  speed: number = 30 ;
  ws: $WebSocket ;

  constructor(public navCtrl: NavController) {
    this.ws = new $WebSocket("ws://192.168.10.2:8080/ws/WebsocketServer/app");
  }

  topstart(){
    this.sendMessage("goStraight") ;
    console.log("topstart")
  }

  topend(){
    this.sendMessage("stop") ;
    console.log("topend")
  }

  bottomstart(){
    this.sendMessage("goBack") ;
    console.log("bottomstart")
  }

  bottomend(){
    this.sendMessage("stop") ;
    console.log("bottomend")    
  }

  leftstart(){
    this.sendMessage("turnLeft") ;
    console.log("leftstart")
  }

  leftend(){
    this.sendMessage("stop") ;
    console.log("leftend")    
  }

  rightstart(){
    this.sendMessage("turnRight") ;
    console.log("rightstart")
  }

  rightend(){
    this.sendMessage("stop") ;
    console.log("rightend")    
  }

  sendMessage(act){
    this.ws.send4Direct(JSON.stringify({
      action: act,
      speed: this.speed
    })) ;
  }

}
