import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  public salas: Observable<any>;

  constructor(db: AngularFirestore) {
    this.salas = db.collection('/Salas').valueChanges();
    console.log(this.salas);
   }

  ngOnInit() {
  }

  availableBoxes = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
  ];

  dropzone1 = [
    'Box 6'
  ];

  dropzone2 = [
    'Box 7'
  ];
  dropzone3 = [
    'Box 7'
  ];
  dropzone4 = [
    'Box 7'
  ];

  dropzones = [this.dropzone1, this.dropzone2, this.dropzone3, this.dropzone4];

  currentBox?: string;

  move(box: string, toList: string[]): void {
    remove(box, this.availableBoxes);
    remove(box, this.dropzone1);
    remove(box, this.dropzone2);

    toList.push(box);
  }

  Add(name: string): void{
    this.availableBoxes.push(name);
  }

  addDropZone(classe: string): void{
  
  }

}
