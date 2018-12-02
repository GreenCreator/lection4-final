import { Injectable } from '@angular/core';
import { Meetup } from './meetups/meetup.interface';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private meetupsList: Meetup[] = [
    {
      id: '1',
      title: 'Meetup one',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '2',
      title: 'Meetup two',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '3',
      title: 'Meetup three',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '4',
      title: 'Meetup four',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '5',
      title: 'Meetup five',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '6',
      title: 'Meetup six',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '7',
      title: 'Meetup seven',
      description: 'This is meetup. One of many. There will be more.'
    },
    {
      id: '8',
      title: 'Meetup eight',
      description: 'This is meetup. One of many. There will be more.'
    }
  ];

  constructor() { }

  /**
   * Получить список мероприятий
   */
  getList(): Meetup[] {
    return this.meetupsList.slice();
  }

 /**
   * Получить мероприятие
   * @param id - номер мероприятия
   */
  get(id: string): Meetup {
    return this.meetupsList.find(m => m.id === id);
  }

  /**
   * Создать мероприятие
   */
  create(m: Meetup): void {
    this.meetupsList.push(m);
  }

}
