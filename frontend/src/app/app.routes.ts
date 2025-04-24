import { Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';
import {HomeComponent} from './home/home.component';
import {PassedEventDetailComponent} from './passed-event-detail/passed-event-detail.component';
import {MerchLandingComponent} from './merch-landing/merch-landing.component';
import {MerchContactComponent} from './merch-contact/merch-contact.component';
import {MerchCategoryComponent} from './merch-category/merch-category.component';
import {MerchClothingItemComponent} from './merch-clothing-item-detail/merch-clothing-item.component';
import {MerchAboutUsComponent} from './merch-about-us/merch-about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'merch', component: MerchLandingComponent},
  { path: 'merch/contact', component: MerchContactComponent},
  { path: 'merch/about-us', component: MerchAboutUsComponent},
  { path: 'merch/:category', component: MerchCategoryComponent },
  { path: 'merch/item/:id', component: MerchClothingItemComponent},
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'passed-event/:id', component: PassedEventDetailComponent },
];
