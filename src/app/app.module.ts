import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsIdComponent } from './components/rooms-id/rooms-id.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { RoomSummaryComponent } from './components/room-summary/room-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    HomeComponent,
    RoomsComponent,
    RoomsIdComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RoomSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
