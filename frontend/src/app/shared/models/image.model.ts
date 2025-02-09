export class Image {
  id: number;
  image: Blob;

  constructor(id: number, image: Blob) {
    this.id = id;
    this.image = image;
  }
}
