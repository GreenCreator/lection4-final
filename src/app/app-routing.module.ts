import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/event-list/events-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EventPageComponent } from './events/event-page/event-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'events/:id',
    component: EventPageComponent
  },
  {
    path: 'events',
    component: EventsListComponent,
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
