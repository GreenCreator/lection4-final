import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {
  @Input() meetup: { id: string; title: string; description: string; };
  @Output() clickedMeetup = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
