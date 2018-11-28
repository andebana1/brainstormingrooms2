import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Salas} from './salas';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  
  constructor(private db: AngularFireDatabase) { }

}
