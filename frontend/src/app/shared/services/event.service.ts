import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = [
    new Event(
      1,
      'CHARITY DRIVE',
      'Doe mee met onze charity drive en maak een verschil! We zamelen geld in om het Kinderkankerfonds te ondersteunen. Jouw bijdrage, groot of klein, helpt levens te verbeteren. Samen maken we de wereld een beetje mooier!',
      'Startlocatie A',
      200,
      '23/03/2025',
      'Oost-Vlaanderen',
      45,
      'Dens Merch, Hapje & Drankje, Windowsticker',
      '/assets/charity-drive/charity-drive-1.png',
      'https://denscharitydrive.eventsquare.store/dn5b9mm7fvrx',
      [
        new Activity('test', 'test', '/assets/charity-drive/charity-drive-1.png'),
        new Activity('test', 'test', '/assets/charity-drive/charity-drive-2.png'),
        new Activity('test', 'test', '/assets/charity-drive/charity-drive-3.png'),
      ] // Array van activiteiten
    ),
    new Event(
      2,
      'Joyride By Night',
      'Ervaar de sfeer van Dens Exotics met een betaalbare Joyride by Night – een sfeervolle avondrit langs prachtige wegen, ideaal om onze events te ontdekken!',
      'Startlocatie B',
      150,
      '07/08/2025',
      'Oost-Vlaanderen, West-Vlaanderen, Antwerpen',
      10,
      'Windowsticker',
      '/assets/joy-ride-by-night/joy-ride-by-night-1.png',
      'https://joyride-by-night.eventsquare.store/ugyvksvt0ynu',
      [
        new Activity('test', 'test', '/assets/joy-ride-by-night/joy-ride-by-night-2.png'),
        new Activity('test', 'test', '/assets/joy-ride-by-night/joy-ride-by-night-3.png'),
        new Activity('test', 'test', '/assets/joy-ride-by-night/joy-ride-by-night-4.png'),
      ]
    ),
    new Event(
      3,
      'Tour Des Ardennes',
      'Een dag vol rijplezier door de bochtige wegen van de Ardennen, perfect voor liefhebbers van uitdagende routes en adembenemende uitzichten!',
      'Startlocatie C',
      400,
      '17/08/2025',
      'Namen, Luxemburg, Luik',
      75,
      'Luch, Drankje + snack, Dens Merch, Windowsticker',
      '/assets/tour-des-ardennes/tour-des-ardennes-1.png',
      'https://tour-des-ardennes.eventsquare.store/o61hwc2ecmne',
      [
        new Activity('test', 'test', '/assets/tour-des-ardennes/tour-des-ardennes-2.png'),
        new Activity('test', 'test', '/assets/tour-des-ardennes/tour-des-ardennes-3.png'),
        new Activity('test', 'test', '/assets/tour-des-ardennes/tour-des-ardennes-4.png'),
      ]
    ),
    new Event(
      4,
      'Full Day Drive',
      'Een hele dag toeren met als doel minstens een halve tank leeg te rijden, puur rijplezier gegarandeerd!',
      'Startlocatie D',
      400,
      '04/05/2025',
      'Vlaams-Brabant, Wallonië',
      90,
      'Middag eten, hapjes in de avond, Drank, Dens Merch, Windowsticker',
      '/assets/full-day-drive/full-day-drive-1.png',
      'https://full-day-drive.eventsquare.store/c6iy5feqoyhi',
      [
        new Activity('test', 'test', '/assets/full-day-drive/full-day-drive-2.png'),
        new Activity('test', 'test', '/assets/full-day-drive/full-day-drive-3.png'),
        new Activity('test', 'test', '/assets/full-day-drive/full-day-drive-4.png'),
      ]
    ),
    new Event(
      5,
      'Birthday Drive',
      'Een speciale rit ter ere van de verjaardag van de oprichter, met volop sfeer en rijplezier!',
      'Leeuw van Waterlo',
      250,
      '13/07/2025',
      'Henegouwen, Wallonië, Vlaams-Brabant',
      40,
      'Hapje, Drankje, Dens Merch, Windowsticker',
      '/assets/birthday-drive/birthday-drive-1.png',
      'https://birthday-drive.eventsquare.store/ongfuljnitra',
      [
        new Activity('test', 'test', '/assets/birthday-drive/birthday-drive-2.png'),
        new Activity('test', 'test', '/assets/birthday-drive/birthday-drive-3.png'),
        new Activity('test', 'test', '/assets/birthday-drive/birthday-drive-4.png'),
      ]
    ),
    new Event(
      6,
      'Joyride',
      'De laatste officiële rit van het jaar om samen in stijl af te sluiten!',
      'Startlocatie E',
      200,
      '21/09/2025',
      'Oost-Vlaanderen, Antwerpen, Vlaams-Brabant',
      35,
      'Snacks, Dens Merch, Windowsticker',
      '/assets/joy-ride/joy-ride-1.png',
      'https://joyride.eventsquare.store/jizp22yjcqes',
      [
        new Activity('test', 'test', '/assets/joy-ride/joy-ride-2.png'),
        new Activity('test', 'test', '/assets/joy-ride/joy-ride-3.png'),
        new Activity('test', 'test', '/assets/joy-ride/joy-ride-4.png'),
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
