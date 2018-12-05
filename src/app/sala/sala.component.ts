import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {SalasService} from './salas.service';
import { Observable } from 'rxjs';
import { Teste } from './teste';
import { Salas } from './salas';

function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent implements OnInit {

  arr: Salas[] = [];  
  numClasses: number;
  teste: any[][];
  model = { test: null};  
  dropzones: any[] = [];
  availableBoxes: string[]=[];
  classes: string[] = [];
  usuario: string = 'ranielisonsoares2@gmail.com';
  ngOnInit() {  
    this._data.getSalas().subscribe(  
      (salas: Salas[]) => {  
        this.arr = salas;  
        console.log(this.arr[0]); 
        this.teste = this.arr[0].ideias[this.usuario];
        this.numClasses = this.arr[0].classes.length;
        this.classes = this.arr[0].classes;
        console.log(this.classes);
        for (let i in this.teste){
          if(i.match('geral')===null){
           this.dropzones.push(this.teste[i]);
          }else{
            for(let j in this.teste[i]){
              this.availableBoxes.push(this.teste[i][j]);
            }
          }
        }
      }  
    );   
  }  
  constructor(public _data: SalasService) {  
  }  
  userSubmit() {  
    this._data.addSala(this.model);  
    this.model.test = null;  
  }  
  onDelete(teste) {  
    this._data.deleteSala(teste);  
  }
  currentBox?: string;

  move(box: string, toList: string[]): void {
    remove(box, this.availableBoxes);
    let i = 0;
    do{
      remove(box, this.dropzones[i]);
      i++;
    }while(i<this.dropzones.length);
    //console.log(this.teste);
    toList.push(box);
  }

  Add(name: string): void{
    this.availableBoxes.push(name);
  }

  addDropZone(classe: string): void{
    
  }

  updtateIdeias(){
    let upideias: any[] = [];
    let id = this.arr[0].id;
    let j = 0;
    for(let i in this.arr[0].ideias[this.usuario]){
      if(i.match('geral')===null){
          this.arr[0].ideias[this.usuario][i] = this.dropzones[j];
          j++;
      }else{
        console.log(i);
        this.arr[0].ideias[this.usuario][i] = this.availableBoxes;
    }
  }
    this._data.updateIdeia(this.arr[0].id, this.arr[0].ideias);
  }
}
