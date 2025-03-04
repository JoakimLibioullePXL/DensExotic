import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-events-list',
  standalone: true,
    imports: [CommonModule, NgForOf, RouterLink, NgOptimizedImage],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  goToEventDetail(event: any) {
    if (event && event.id) {
      this.router.navigate(['/event', event.id]);
    }
  }
}
