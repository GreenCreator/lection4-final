import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  @Output() eventClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  closeForm() {
    this.eventClose.emit();
  }
}
