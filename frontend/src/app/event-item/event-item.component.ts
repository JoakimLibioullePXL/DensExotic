import {Component, Input} from '@angular/core';
import { Event } from '../shared/models/event.model'
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-event-item',
  imports: [
    RouterLink
  ],
  templateUrl: './event-item.component.html',
  standalone: true,
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  @Input() event!: Event;
}
