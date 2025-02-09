import {Image} from './image.model';

export class Event {
  id?: number;
  title : string
  description : string;
  startLocation: string;
  distance : number;
  date : string;
  region: string;
  price : number;
  goodies: string;
  image: Image;

  constructor(title:string, description:string, startLocation:string, distance:number, date:string, region:string, price:number, goodies:string, image:Image) {
    this.title = title;
    this.description = description;
    this.startLocation = startLocation;
    this.distance = distance;
    this.date = date;
    this.region = region;
    this.price = price;
    this.goodies  = goodies;
    this.image = image;
  }
}
