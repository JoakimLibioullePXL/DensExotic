import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = [
    new Event(
      1,
      'JOYRIDE',
      'Een spannende rit vol avontuur.',
      'Startlocatie A',
      100,
      '07/08/2025',
      'Regio A',
      50,
      'Goodiebag inbegrepen',
      '/assets/joyride.jpeg',
      [
        new Activity('test', 'test', '/assets/joyride.jpeg'),
        new Activity('test', 'test', '/assets/joyride.jpeg'),
        new Activity('test', 'test', '/assets/joyride.jpeg'),
      ] // Array van activiteiten
    ),
    new Event(
      2,
      'CARS AND COFFEE',
      'Een bijeenkomst voor autoliefhebbers met koffie.',
      'Startlocatie B',
      20,
      '07/08/2025',
      'Regio B',
      10,
      'Gratis koffie inbegrepen',
      '/assets/cars-coffee.jpeg',
      [
        new Activity('test', 'test', '/assets/cars-coffee.jpeg'),
        new Activity('test', 'test', '/assets/cars-coffee.jpeg'),
        new Activity('test', 'test', '/assets/cars-coffee.jpeg'),
      ]
    ),
    new Event(
      3,
      'FULL DAY DRIVE',
      'Een volledige dag genieten van een geweldige rit.',
      'Startlocatie C',
      200,
      '07/08/2025',
      'Regio C',
      100,
      'Lunch en souvenirs inbegrepen',
      '/assets/full-day-drive.jpeg',
      [
        new Activity('test', 'test', '/assets/full-day-drive.jpeg'),
        new Activity('test', 'test', '/assets/full-day-drive.jpeg'),
        new Activity('test', 'test', '/assets/full-day-drive.jpeg'),
      ]
    ),
    new Event(
      4,
      'CHARITY DRIVE',
      'Een rit voor het goede doel.',
      'Startlocatie D',
      150,
      '07/08/2025',
      'Regio D',
      75,
      'Donatiecertificaat inbegrepen',
      '/assets/charity-drive.jpeg',
      [
        new Activity('test', 'test', '/assets/charity-drive.jpeg'),
        new Activity('test', 'test', '/assets/charity-drive.jpeg'),
        new Activity('test', 'test', '/assets/charity-drive.jpeg'),
      ]
    ),
    new Event(
      5,
      'TOUR DES ARDENNES',
      'Een prachtige tour door de Ardennen.',
      'Startlocatie E',
      300,
      '07/08/2025',
      'Regio E',
      150,
      'Gids en routekaart inbegrepen',
      '/assets/tour-ardennes.jpeg',
      [
        new Activity('test', 'test', '/assets/tour-ardennes.jpeg'),
        new Activity('test', 'test', '/assets/tour-ardennes.jpeg'),
        new Activity('test', 'test', '/assets/tour-ardennes.jpeg'),
      ]
    )
  ];

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }
}
