import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {SalasService} from './salas.service';
import { Observable } from 'rxjs';
import { Teste } from './teste';
import { Salas } from './salas';
import { ActivatedRoute } from '@angular/router';

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
  usuario: string;
  idDoc: number;
  emails: string[] = [];
  ideias : any[] = [];
  private sub: any;
  usuurl: string;
  idurl: string;
  
  ngOnInit() {
    //let {params} = this.route.snapshot
    this.route.params.subscribe( params => {
      this.usuario = params['id']; 
      this.idurl = params['id2']; 
    });
    console.log(this.usuario);
    this._data.getSalas().subscribe(  
      (salas: Salas[]) => {  
        this.arr = salas;  
        let z = 0;
        while(z < this.arr.length){
          if(this.arr[z].id.match(this.idurl)){
            this.idDoc = z;
          }
          z++;
        }
        console.log(this.idDoc);
        this.teste = this.arr[this.idDoc].ideias[this.usuario];
        this.ideias = this.arr[this.idDoc].ideias;
        this.numClasses = this.arr[this.idDoc].classes.length;
        this.classes = this.arr[this.idDoc].classes;
        this.emails = this.arr[this.idDoc].emails;
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
  constructor(private route: ActivatedRoute, public _data: SalasService) {  
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
    toList.push(box);
    console.log(this.arr[this.idDoc]);
  }

  Add(name: string): void{
    this.availableBoxes.push(name);
  }
  AddPessoa(name: string): void{
    //let novo: string[] = ['teste'];
    let t: any[] = [];
    let i = this.arr[this.idDoc].emails.length;
    this.emails.push(name);
    for (let j of this.emails){
      if(this.arr[this.idDoc].ideias[j] == null){
        this.arr[this.idDoc].ideias[j] = {};
      }
    }

    for (let j of this.classes){
      this.arr[this.idDoc].ideias[name][j] = [];
    }
    //this.arr[0].emails.push(name);
    //console.log(this.classes);
    //this.arr[0].ideias.push(t);
    //this.ideias.push();
    //this.arr[this.idDoc].emails.push(name);
    //this._data.addSala(name, this.usuario);
    console.log(this.arr[this.idDoc].ideias);
  }

  AddClasse(name: string): void{
    let t: any[] = [];
    let i = this.arr[this.idDoc].classes.length;
    this.arr[this.idDoc].classes.push(name);
    for(let j in this.arr[this.idDoc].ideias){
        this.arr[this.idDoc].ideias[j][name] = [];
    }

    console.log(this.arr[this.idDoc]);
  }

  addDropZone(classe: string): void{
    
  }

  updtateIdeias(){
    let upideias: any[] = [];
    let id = this.arr[this.idDoc].id;
    let j = 0;
    for(let i in this.arr[this.idDoc].ideias[this.usuario]){
      if(i.match('geral')===null){
          this.arr[this.idDoc].ideias[this.usuario][i] = this.dropzones[j];
          j++;
      }else{
        this.arr[this.idDoc].ideias[this.usuario][i] = this.availableBoxes;
    }
  }
    this._data.updateIdeia(this.arr[this.idDoc].id, this.arr[this.idDoc].ideias);
    this.dropzones = [];
    this.availableBoxes = [];
  }
}