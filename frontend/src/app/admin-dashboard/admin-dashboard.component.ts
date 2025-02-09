import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EventService } from '../shared/services/event.service';
import { Event} from '../shared/models/event.model';
import {CommonModule, NgIf} from '@angular/common';
import {EventItemComponent} from '../event-item/event-item.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    CommonModule,
    EventItemComponent,
  ],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  events : Event[] = [];
  eventService : EventService = inject(EventService);
  fb: FormBuilder = inject(FormBuilder);

  eventForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    startLocation: ['', Validators.required],
    distance: ['', Validators.required],
    date: ['', Validators.required],
    region: ['', Validators.required],
    price: ['', Validators.required],
    goodies: ['', Validators.required]
  })

  onSubmit(){
    if (this.eventForm.valid) {
      const newEvent: Event = {...this.eventForm.value};
      // @ts-ignore
      this.eventService.createEvent(newEvent).subscribe(() => {
        this.eventForm.reset();
      });
    }
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        // @ts-ignore
        this.events = events;
      }
    });
  }
}
