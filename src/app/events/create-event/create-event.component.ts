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

  constructor(private _eventsService : EventsService) { }

  closeForm() {
    this.eventClose.emit();
  }
  submitForm(submitForm: NgForm) {
    this._eventsService.addItem(submitForm.value);
    console.log(submitForm.value);
    this.closeForm();
  }
  
  
}
