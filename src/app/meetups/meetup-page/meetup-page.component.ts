import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-meetup-page',
  templateUrl: './meetup-page.component.html',
  styleUrls: ['./meetup-page.component.scss']
})
export class MeetupPageComponent implements OnInit {
  meetupId: string;

  constructor(
    private _activatedRoute: ActivatedRouteSnapshot
  ) { }

  ngOnInit() {
    this.meetupId = this._activatedRoute.params.data.id;
  }

}
