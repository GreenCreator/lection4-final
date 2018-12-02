import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';

import { MeetupsListComponent } from './meetup-list/meetups-list.component';
import { MeetupComponent } from './meetup-list/meetup/meetup.component';
import { MeetupPageComponent } from './meetup-page/meetup-page.component';

@NgModule({
  declarations: [MeetupsListComponent, MeetupComponent, MeetupPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [MeetupsListComponent]
})
export class MeetupsModule { }
