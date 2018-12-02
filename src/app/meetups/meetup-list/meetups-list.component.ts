import { Component, OnInit } from '@angular/core';
import { MeetupService } from 'src/app/meetup.service';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.scss'],
})
export class MeetupsListComponent implements OnInit {
  title = 'Meetups list';
  meetups: { id: string; title: string; description: string }[];

  constructor(private meetupService: MeetupService) {}

  ngOnInit() {
    this.meetups = this.meetupService.getList();
  }

  childClicked(id: string) {
    this.title = 'Clicked meetup: ' + id;
  }

  updateMeetups() {
    this.meetups = this.meetupService.getList();
  }

  createMeetup() {
    this.meetupService.create({
      id: String(Math.round(Math.random() * 1000)),
      title: 'Dynamic meetup',
      description: 'Создано в ' + Date.now()
    });
  }
}
