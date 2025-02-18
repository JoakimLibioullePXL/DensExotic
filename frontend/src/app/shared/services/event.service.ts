import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventService {
  events = [
    { id:1, title: 'JOYRIDE', date: '07/08/2025', image: 'assets/joyride.jpeg' },
    { id:2, title: 'CARS AND COFFEE', date: '07/08/2025', image: 'assets/cars-coffee.jpeg' },
    { id:3, title: 'FULL DAY DRIVE', date: '07/08/2025', image: 'assets/full-day-drive.jpeg' },
    { id:4, title: 'CHARITY DRIVE', date: '07/08/2025', image: 'assets/charity-drive.jpeg' },
    { id:5, title: 'TOUR DES ARDENNES', date: '07/08/2025', image: 'assets/tour-ardennes.jpeg' }
  ];

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find(event => event.id === id);
  }
}
