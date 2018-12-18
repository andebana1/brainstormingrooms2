import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Teste} from './teste';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Salas } from './salas';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
    
  salascollection: AngularFirestoreCollection<Salas>
  sala: Observable<Salas[]>;
  salaDoc: AngularFirestoreDocument<Salas>;
  constructor(public _afs: AngularFirestore) {  
    this.salascollection = this._afs.collection('Salas');  
    this.sala = this.salascollection.snapshotChanges().map(  
      changes => {  
        return changes.map(  
          a => {  
            const data = a.payload.doc.data() as Salas;  
            data.id = a.payload.doc.id;  
            return data;  
          });  
      });
  }  
  getSalas() {  
    return this.sala;  
  }  
  addSala(temaS, admS:string) {  
    this._afs.collection('Salas').add({
      tema: temaS,
      adm: admS,
      salaativa: true,
      classes: [],
      emails: [
        admS],
      ideias: {
      },   
    });
  }  
  updateIdeia(id: string, ideia){
    this.salascollection.doc(id).update({ideias: ideia});
  }

  deleteSala(sala) {  
    this.salaDoc = this._afs.doc(`Users/${sala.id}`);  
    this.salaDoc.delete();  
  }

}
