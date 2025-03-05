import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {EventsListComponent} from './events-list/events-list.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DensExotics';
}
