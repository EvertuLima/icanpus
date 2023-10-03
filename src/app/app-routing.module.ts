import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RoomSummaryComponent } from './components/room-summary/room-summary.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'room-summary', component: RoomSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
