import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      toggleButtons();
      this.router.navigate(['/Home']);
      const name = res.user.displayName;
      const NavbarNameID = document.getElementById("NavbarNameID");
      NavbarNameID.innerHTML = `Hello, ${name}`;

    }, err => {
      alert('Error logging in. Please try again.');
    })
  }

  googleSignOut(){
    return this.fireauth.signOut().then(() => {
      toggleButtons();
      this.router.navigate(['/Home']);
      const NavbarNameID = document.getElementById("NavbarNameID");
      NavbarNameID.innerHTML = ``;
    }).catch((error) => {
      alert('Error Signing out. Please try again.');
    });
    
  }
  
}
function toggleButtons() {
  var loginButton = document.getElementById("Login");
  var signOutButton = document.getElementById("SignOut");

  if (loginButton.style.display === "none") {
    loginButton.style.display = "block";
    signOutButton.style.display = "none";
  } else {
    loginButton.style.display = "none";
    signOutButton.style.display = "block";
  }
}


  