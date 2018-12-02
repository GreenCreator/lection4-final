import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  isShowModal = false;
 
  @Output() clickedEvent = new EventEmitter<string>();

  @Input() event: { id: number; title: string; description: string; };

  constructor(public eventsService: EventsService) { }
  ngOnInit() {
  }
  toggleModal() {
    this.isShowModal = !this.isShowModal;
  }

}
