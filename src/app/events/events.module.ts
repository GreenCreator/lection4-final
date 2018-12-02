import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './event-list/events-list.component';
import { EventComponent } from './event/event.component';
import { EventPageComponent } from './event-page/event-page.component';
import { MatCardModule, MatButtonModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsService } from './events.service';
import { FormsModule } from '@angular/forms';
import { QuestionWindowComponent } from './question-window/question-window.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventComponent,
    EventPageComponent,
    CreateEventComponent,
    QuestionWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    RouterModule
  ],
  providers: [EventsService],
  exports: [EventsListComponent]
})
export class EventsModule { }
