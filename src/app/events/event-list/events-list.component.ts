import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { IEvent } from '../events.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  /** название страницы */
  title = 'Events list';

  /** список мероприятий */
  eventList: IEvent[];

  /** флаг отображения модального окна (открыто - true, закрыто - false) */
  isShowModal = false;


  constructor(public eventsService: EventsService) {}


  ngOnInit() {
    this.eventList = this.eventsService.list;
  }


  /**
   * Заменяет название страницы на "Clicked event:" с идентификационным номером текущего мероприятия
   * @param id - идентификатор мероприятия
   */
  childClicked(id: number) {
    this.title = `Clicked event: ${id}`;
  }


  /**
   * Переключить текущее состояния модального окна
   */
  toggleModal() {
    this.isShowModal = !this.isShowModal;
  }

}
