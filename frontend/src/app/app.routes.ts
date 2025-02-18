import { Routes } from '@angular/router';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventsListComponent} from './events-list/events-list.component'; // Pas het pad aan als nodig

export const routes: Routes = [
  { path: 'event/:id', component: EventDetailComponent },
  { path: '', component: EventsListComponent },
];
