import { Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';
import {HomeComponent} from './home/home.component';
import {DirectSalesComponent} from './direct-sales/direct-sales.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sales', component: DirectSalesComponent},
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent }
];
