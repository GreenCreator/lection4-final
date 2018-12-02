import { Component } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  title = 'Events list';
  events: { id: number; title: string; description: string; }[];
  isShowModal = false;

  constructor(public eventsService: EventsService) {
    this.events = this.eventsService.list;
  }

  childClicked(id: string) {
    this.title = 'Clicked event: ' + id;
  }

  toggleModal() {
    this.isShowModal = !this.isShowModal;
  }

}
