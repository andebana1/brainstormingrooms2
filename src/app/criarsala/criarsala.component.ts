import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalasService } from '../sala/salas.service'; 
import { Salas } from '../sala/salas';
import { Location } from '@angular/common';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

interface NovaSala {
  tema: string;
  adm: string;
  classes: string[];
  emails: string[];
  ideias: string[][][];
  salaativa: boolean;
}

@Component({
  selector: 'app-criarsala',
  templateUrl: './criarsala.component.html',
  styleUrls: ['./criarsala.component.css']
})

export class CriarsalaComponent implements OnInit, OnDestroy {
  usuarioLog: string = '';
  private sub: any;
  sala : Salas;
  novasala: NovaSala;
 // model = {adm: '', tema: '', classes: [], emails: [], salaatriva: true, ideias: [][]};
  constructor(private route: ActivatedRoute, public _data: SalasService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.usuarioLog = params['string'];
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  addSala(tema: string){
    /*this.model.adm = this.usuarioLog;
    this.model.tema = tema;
    this.model.emails.push(this.usuarioLog);
    this.model.ideias.push(['dsdsd', 'dsdsdfg', 'dsdsf']);*/

    this._data.addSala(tema, this.usuarioLog);

    /*this.model.adm = '';
    this.model.tema = '';
    this.model.emails = [];
    this.model.ideias = [];*/
  }
}
