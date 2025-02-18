import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {NgForOf} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-events-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  goToEventDetail(event: any) {
    this.router.navigate(['/event', event.id]);
  }
}
