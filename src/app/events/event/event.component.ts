import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Output() clickedEvent = new EventEmitter<string>();

  @Input() event: { id: number; title: string; description: string; };

  constructor() { }

  ngOnInit() {
  }

}
