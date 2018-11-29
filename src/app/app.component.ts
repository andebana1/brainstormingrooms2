import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Brainstorming-Rooms';
  constructor(){ }

  ngOnInit(): void {
	
	// Inicializando Firebase
  var config = {
    apiKey: "AIzaSyBw40Xbjmt6wTsOwdPqja-kLiPYcmF7Tlw",
    authDomain: "brainstormingrooms-80873.firebaseapp.com",
    databaseURL: "https://brainstormingrooms-80873.firebaseio.com",
    projectId: "brainstormingrooms-80873",
    storageBucket: "brainstormingrooms-80873.appspot.com",
    messagingSenderId: "673739019739"
  };
    firebase.initializeApp(config)
  }
}
