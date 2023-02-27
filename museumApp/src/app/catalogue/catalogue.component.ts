import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Artifacts } from '../models/artifacts.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  artifacts: Artifacts[]

  constructor(public service: FirebaseService) { }

  ngOnInit(): void {
    this.getAllInfo();
  }

  getAllInfo(): void {
    this.service.getInfo().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.artifacts = data;
    });
  }
}


