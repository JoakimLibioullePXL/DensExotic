import { ClothingCategory, Gender, Size, Color } from './enums.model';
import { PersonalizationOptions } from './personalization-options.model';

export interface ClothingItem {
  id: number;
  name: string;
  description: string;
  category: ClothingCategory;
  gender: Gender;
  size: Size[];
  material: string;
  color: Color[];
  price: number;
  images: string[]; // URL's of base64 afbeeldingen
  personalizationAllowed: boolean;
  personalizationOptions?: PersonalizationOptions;
}
