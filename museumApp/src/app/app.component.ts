import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UnityComponent } from './unity/unity.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'museumApp';

  unityComponent = new UnityComponent();
  constructor(private router: Router) { }

  stopUnity(): void {
    if (this.router.url != "/Tours") {
      console.log("this is not working as expected")
      //document.getElementById('unity-container').remove();
      this.unityComponent.ngOnDestroy();
    }
  }
}
