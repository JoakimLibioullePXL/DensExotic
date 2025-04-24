import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = [
    new Event(
      1,
      'Joyride By Night',
      'Ervaar de sfeer van Dens Exotics met een betaalbare Joyride by Night – een sfeervolle avondrit langs prachtige wegen, ideaal om onze events te ontdekken!',
      'Startlocatie B',
      150,
      '03/05/2025',
      'Oost-Vlaanderen, West-Vlaanderen, Antwerpen',
      10,
      'Windowsticker',
      '/assets/exotic-events/joy-ride-by-night/joy-ride-by-night-1.png',
      'https://joyride-by-night.eventsquare.store/ugyvksvt0ynu',
      [
        new Activity('test', 'test', '/assets/exotic-events/joy-ride-by-night/joy-ride-by-night-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/joy-ride-by-night/joy-ride-by-night-3.png'),
        new Activity('test', 'test', '/assets/exotic-events/joy-ride-by-night/joy-ride-by-night-4.png'),
      ]
    ),
    new Event(
      2,
      'Full Day Drive',
      'Een hele dag toeren met als doel minstens een halve tank leeg te rijden, puur rijplezier gegarandeerd!',
      'Startlocatie D',
      400,
      '08/06/2025',
      'Vlaams-Brabant, Wallonië',
      90,
      'Middag eten, hapjes in de avond, Drank, Dens Merch, Windowsticker',
      '/assets/exotic-events/full-day-drive/full-day-drive-1.png',
      'https://full-day-drive.eventsquare.store/c6iy5feqoyhi',
      [
        new Activity('test', 'test', '/assets/exotic-events/full-day-drive/full-day-drive-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/full-day-drive/full-day-drive-3.png'),
        new Activity('test', 'test', '/assets/exotic-events/full-day-drive/full-day-drive-4.png'),
      ]
    ),
    new Event(
      3,
      'Birthday Drive',
      'Een speciale rit ter ere van de verjaardag van de oprichter, met volop sfeer en rijplezier!',
      'Leeuw van Waterlo',
      250,
      '13/07/2025',
      'Henegouwen, Wallonië, Vlaams-Brabant',
      40,
      'Hapje, Drankje, Dens Merch, Windowsticker',
      '/assets/exotic-events/birthday-drive/birthday-drive-1.png',
      'https://birthday-drive.eventsquare.store/ongfuljnitra',
      [
        new Activity('test', 'test', '/assets/exotic-events/birthday-drive/birthday-drive-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/birthday-drive/birthday-drive-3.png'),
        new Activity('test', 'test', '/assets/exotic-events/birthday-drive/birthday-drive-4.png'),
      ]
    ),
    new Event(
      4,
      'Tour Des Ardennes',
      'Een dag vol rijplezier door de bochtige wegen van de Ardennen, perfect voor liefhebbers van uitdagende routes en adembenemende uitzichten!',
      'Startlocatie C',
      400,
      '17/08/2025',
      'Namen, Luxemburg, Luik',
      75,
      'Luch, Drankje + snack, Dens Merch, Windowsticker',
      '/assets/exotic-events/tour-des-ardennes/tour-des-ardennes-1.png',
      'https://tour-des-ardennes.eventsquare.store/o61hwc2ecmne',
      [
        new Activity('test', 'test', '/assets/exotic-events/tour-des-ardennes/tour-des-ardennes-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/tour-des-ardennes/tour-des-ardennes-3.png'),
        new Activity('test', 'test', '/assets/exotic-events/tour-des-ardennes/tour-des-ardennes-4.png'),
      ]
    ),

    new Event(
      5,
      'Joyride',
      'De laatste officiële rit van het jaar om samen in stijl af te sluiten!',
      'Startlocatie E',
      200,
      '21/09/2025',
      'Oost-Vlaanderen, Antwerpen, Vlaams-Brabant',
      35,
      'Snacks, Dens Merch, Windowsticker',
      '/assets/exotic-events/joy-ride/joy-ride-1.png',
      'https://joyride.eventsquare.store/jizp22yjcqes',
      [
        new Activity('test', 'test', '/assets/exotic-events/joy-ride/joy-ride-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/joy-ride/joy-ride-3.png'),
        new Activity('test', 'test', '/assets/exotic-events/joy-ride/joy-ride-4.png'),
      ]
    )
  ];

  private passed_events: Event[] = [
    new Event(
      1,
      'CHARITY DRIVE',
      'Op 23/03/2025 organiseerden we een charity drive om geld in te zamelen voor het Kinderkankerfonds. Dankzij de gulle bijdragen van onze deelnemers hebben we samen een mooi bedrag opgehaald om kinderen met kanker en hun families te ondersteunen. Elke donatie, groot of klein, heeft geholpen om een verschil te maken. Bedankt aan iedereen die heeft bijgedragen – samen hebben we de wereld een beetje mooier gemaakt!',
      'Startlocatie A',
      200,
      '23/03/2025',
      'Oost-Vlaanderen',
      45,
      'Dens Merch, Hapje & Drankje, Windowsticker',
      '/assets/exotic-events/charity-drive/charity-drive-1.png',
      'https://denscharitydrive.eventsquare.store/dn5b9mm7fvrx',
      [
        new Activity('test', 'test', '/assets/exotic-events/charity-drive/charity-drive-1.png'),
        new Activity('test', 'test', '/assets/exotic-events/charity-drive/charity-drive-2.png'),
        new Activity('test', 'test', '/assets/exotic-events/charity-drive/charity-drive-3.png'),
      ] // Array van activiteiten
    ),
  ]

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  getPassedEvents(): Event[]{
    return this.passed_events;
  }

  getPassedEventById(id: number): Event | undefined {
    return this.passed_events.find(event => event.id === id);
  }
}
