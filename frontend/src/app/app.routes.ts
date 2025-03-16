import { Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';
import {HomeComponent} from './home/home.component';
import {DirectSalesComponent} from './direct-sales/direct-sales.component';
import {ApplicationComponent} from './direct-sales-application/application.component';
import {DirectSalesContactComponent} from './direct-sales-contact/direct-sales-contact.component';
import {DirectSalesMeetTheTeamComponent} from './direct-sales-meet-the-team/direct-sales-meet-the-team.component';
import {
  DirectSalesBrandAmbassadorsComponent
} from './direct-sales-brand-ambassadors/direct-sales-brand-ambassadors.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sales', component: DirectSalesComponent},
  { path: 'sales/application', component: ApplicationComponent},
  { path: 'sales/contact', component: DirectSalesContactComponent},
  { path: 'sales/about-us', component: DirectSalesMeetTheTeamComponent},
  { path: 'sales/brand-ambassadors', component: DirectSalesBrandAmbassadorsComponent},
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent }
];
