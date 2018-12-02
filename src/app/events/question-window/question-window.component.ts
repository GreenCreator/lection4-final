import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-question-window',
  templateUrl: './question-window.component.html',
  styleUrls: ['./question-window.component.scss']
})
export class QuestionWindowComponent {
  @Output() eventClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _eventsService : EventsService) { }

  closeForm() {
    this.eventClosed.emit();
  }
  submitForm(submitForm: NgForm) {
    this._eventsService.addItem(submitForm.value);
    console.log(submitForm.value);
    this.closeForm();
  }
  

}
