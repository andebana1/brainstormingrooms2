import { Component, OnInit, OnDestroy } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {SalasService} from '../sala/salas.service';
import {Salas} from '../sala/salas';

import { Observable } from 'rxjs';

interface Lista{
  id: string;
  temaSala: string;
}

@Component({
  selector: 'app-area-trabalho',
  templateUrl: './area-trabalho.component.html',
  styleUrls: ['./area-trabalho.component.css']
})
export class AreaTrabalhoComponent implements OnInit {

  usuarioLog: string;
  arr: Salas[] = [];
  salasLink: string[] = [];

  constructor(public _data: SalasService) { 
    this.usuarioLog = 'andersonvieira14@gmail.com';
  }

  ngOnInit() {
    this._data.getSalas().subscribe(
      (salas: Salas[]) => {
        this.arr = salas;
        let j = 0;
        console.log(this.arr);
        //let i = 0;
        while(j < this.arr.length){
          for(let i in this.arr[j].emails){
            if(this.arr[j].emails[i].match(this.usuarioLog)){
              this.salasLink.push(this.arr[j].tema);
              this.salasLink.push(this.arr[j].id);
            }
          }
          j++;
        } 
        console.log(this.salasLink);
      }
    )
  }
  
}