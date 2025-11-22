import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/Login/login.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent},   
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }  
];  