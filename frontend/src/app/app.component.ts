import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {NgOptimizedImage} from '@angular/common';
import {EventsListComponent} from './events-list/events-list.component';

@Component({
  selector: 'app-root',
  imports: [
    EventsListComponent,
    NgOptimizedImage,
    EventsListComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DensExotics';
}
