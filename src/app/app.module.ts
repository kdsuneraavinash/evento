import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CountdownTimerComponent } from './event-page/top-section/countdown-timer/countdown-timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicDetailsComponent } from './event-page/basic-details/basic-details.component';
import { EventPageComponent } from './event-page/event-page.component';
import { TopSectionComponent } from './event-page/top-section/top-section.component';
import { GalleryComponent } from './event-page/gallery/gallery.component';
import { AddToCalendarComponent } from './event-page/add-to-calendar/add-to-calendar.component';
import { DescriptionComponent } from './event-page/description/description.component';
import { FooterComponent } from './footer/footer.component';
import { SocialContactComponent } from './event-page/social-contact/social-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    NavbarComponent,
    BasicDetailsComponent,
    EventPageComponent,
    TopSectionComponent,
    GalleryComponent,
    AddToCalendarComponent,
    DescriptionComponent,
    FooterComponent,
    SocialContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
