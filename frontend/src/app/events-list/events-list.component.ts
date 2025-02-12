import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-events-list',
  imports: [
    NgForOf
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent{

  events = [
    { title: 'JOYRID', date: '07/08 2025', image: 'assets/joyride.jpeg' },
    { title: 'CARS AND COFFEE', date: '07/08 2025', image: 'assets/cars-coffee.jpeg' },
    { title: 'FULL DAY DRIVE', date: '07/08 2025', image: 'assets/full-day-drive.jpeg' },
    { title: 'CHARITY DRIVE', date: '07/08 2025', image: 'assets/charity-drive.jpeg' },
    { title: 'TOUR DES ARDENNES', date: '07/08 2025', image: 'assets/tour-ardennes.jpeg' }
  ];
}
