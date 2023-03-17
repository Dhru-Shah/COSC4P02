import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToursComponent } from './tours/tours.component';
import { UnityComponent } from './unity/unity.component';


// The different pages I can route to
const appRout: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent}, 
  {path: 'AboutUs', component: AboutComponent},
  {path: 'Tours', component: ToursComponent},
  {path: 'Catalogue', component: CatalogueComponent},
  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogueComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRout),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
