import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForOf} from '@angular/common';
import {EventService} from '../shared/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEventById(eventId);
  }
}
