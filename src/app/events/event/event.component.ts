import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../events.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  /** событие срабатывающее при нажатии на кнопку "Click to emit" */
  @Output() clickedEvent = new EventEmitter<string>();

  /** принимаемый из родительского компонента объект мероприяния */
  @Input() event: IEvent;
}
