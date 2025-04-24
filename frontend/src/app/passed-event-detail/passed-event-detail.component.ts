import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {EventService} from '../shared/services/event.service';

@Component({
  selector: 'app-passed-event-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './passed-event-detail.component.html',
  styleUrl: './passed-event-detail.component.css'
})
export class PassedEventDetailComponent implements OnInit{
  passed_event: any;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const eventId = Number(params.get('id'));
      if (eventId) {
        this.passed_event = this.eventService.getPassedEventById(eventId);
      }
    });
  }
}
