import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../services/services.service';
import { Artifacts } from '../models/artifacts.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  artifacts: Artifacts[];
  searchTerm: String;

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

  public searchChange() {
    this.searchTerm = (document.getElementById('searchInput') as HTMLInputElement).value;
    this.artifacts.filter(artifact => artifact.Name.includes(this.searchTerm.toString()));
    console.log(this.searchTerm);
  }
}