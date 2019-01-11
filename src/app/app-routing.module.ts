import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ContactUsComponent} from './home-page/contact-us/contact-us.component';
import {AboutUsComponent} from './home-page/about-us/about-us.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo : 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
