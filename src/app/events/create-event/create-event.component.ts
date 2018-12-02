import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  /** Событие для закрытия формы */
  @Output() eventClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _eventsService: EventsService) { }

  /**
   * Метод для закрытия формы
   */
  closeForm() {
    this.eventClose.emit();
  }

  /**
   * Метод обрабатывающий введенные данные в форму с последующим ее закрытием
   * @param submitForm - проинициализированная форма
   */
  submitForm(submitForm: NgForm) {
    this._eventsService.addItem(submitForm.value);
    this.closeForm();
  }

}
