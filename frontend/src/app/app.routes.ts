import { Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';

export const routes: Routes = [
  { path: '', component: EventsListComponent, pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent }
];
