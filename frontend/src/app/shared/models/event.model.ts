import {Activity} from './activity.model';

export class Event {
  id: number;
  title: string;
  description: string;
  startLocation: string;
  distance: number;
  date: string;
  region: string;
  price: number;
  goodies: string;
  image: string;
  activities: Activity[]; // Maximaal 3 activiteiten per event

  constructor(
    id: number,
    title: string,
    description: string,
    startLocation: string,
    distance: number,
    date: string,
    region: string,
    price: number,
    goodies: string,
    image: string,
    activities: Activity[] // Verwacht een array van 3 activiteiten
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startLocation = startLocation;
    this.distance = distance;
    this.date = date;
    this.region = region;
    this.price = price;
    this.goodies = goodies;
    this.image = image;
    this.activities = activities.slice(0, 3); // Beperkt tot maximaal 3 activiteiten
  }
}
