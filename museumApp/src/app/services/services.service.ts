import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Artifacts } from '../models/artifacts.model'; 


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  artifactRef: AngularFireList<Artifacts>;

  constructor(private db: AngularFireDatabase) {
    this.artifactRef = db.list("/");
  }

  getInfo(): AngularFireList<Artifacts> {
    return this.artifactRef;
  }
}