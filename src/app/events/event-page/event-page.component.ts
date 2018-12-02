import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  /** идентификатор события */
  eventId: number;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // подписка на поток изменений параметров роута */
    this._activatedRoute.params.subscribe(
      (data) => {
        this.eventId = data.id;
      }
    );
  }

}
