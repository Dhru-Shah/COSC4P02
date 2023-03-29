import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private auth : AuthService) { }
  signInWithGoogle(){
    this.auth.googleSignIn();
  }

  signOutWithGoogle(){
    this.auth.googleSignOut();
  }

}
