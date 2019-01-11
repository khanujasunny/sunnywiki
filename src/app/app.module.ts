import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProjectListComponent } from './project-list/project-list.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './home-page/contact-us/contact-us.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { FullPageIntroComponent } from './home-page/full-page-intro/full-page-intro.component';
import {
  jarallax,
  jarallaxElement,
  jarallaxVideo
} from 'jarallax';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomePageComponent,
    FooterComponent,
    FullPageIntroComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
