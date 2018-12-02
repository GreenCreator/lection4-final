import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { MeetupsListComponent } from './meetups/meetup-list/meetups-list.component';
import { MeetupPageComponent } from './meetups/meetup-page/meetup-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meetups',
    pathMatch: 'full',
  },
  {
    path: 'meetups',
    component: MeetupsListComponent,
  },
  {
    path: 'meetups/:id',
    component: MeetupPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
