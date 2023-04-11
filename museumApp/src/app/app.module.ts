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
import { FirebaseService } from './services/services.service';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { SwiperModule } from 'swiper/angular';




// The different pages I can route to
const appRout: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent}, 
  {path: 'AboutUs', component: AboutComponent},
  {path: 'Tours', component: ToursComponent},
  {path: 'Catalogue', component: CatalogueComponent},
  {path: 'Unity', component: UnityComponent},
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
    ToursComponent,
    UnityComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRout),
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
