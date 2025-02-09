import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-events-list',
  imports: [
    NgForOf
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();

  }


  private loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error loading events', error);
      }
    );
  }
}
