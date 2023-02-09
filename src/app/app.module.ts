import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { SignupComponent } from './components/signup/signup.component';
import { DeletebtnComponent } from './components/deletebtn/deletebtn.component';
const appRoute : Routes=[
  {path: '',component: LoginComponent},
  {path : 'home' , component: HomeComponent},
  {path : 'login' , component: LoginComponent},
  {path:'signup' , component: SignupComponent}

  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ButtonComponent,
    SignupComponent,
    DeletebtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HotToastModule.forRoot(),
    RouterModule.forRoot(appRoute),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideStorage(()=>getStorage()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
