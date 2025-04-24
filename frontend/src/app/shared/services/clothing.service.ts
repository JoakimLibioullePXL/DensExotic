import {Injectable} from '@angular/core';
import {ClothingItem} from '../models/clothing-item.model';
import {ClothingCategory, Color, Gender, Size} from '../models/enums.model';

@Injectable({
  providedIn: 'root',
})
export class ClothingService {
  private items: ClothingItem[] = [];

  constructor() {
    // Eventueel mock data toevoegen bij initialisatie
    this.loadMockData();
  }

  // ✅ Alle items ophalen
  getAllItems(): ClothingItem[] {
    return this.items;
  }

  // ✅ Items per categorie ophalen
  getItemsByCategory(category: ClothingCategory): ClothingItem[] {
    return this.items.filter(item => item.category === category);
  }

  // ✅ Eén item ophalen met ID
  getItemById(id: number): ClothingItem | undefined {
    return this.items.find(item => item.id === id);
  }

  // ✅ Item toevoegen aan lijst
  addItem(item: ClothingItem): void {
    this.items.push(item);
  }

  // (Optioneel) lijst resetten of mock data laden
  private loadMockData(): void {
    this.items = [
      {
        id: 1,
        name: 'Classic Hoodie',
        description: 'Comfortabele hoodie in zwart',
        category: ClothingCategory.HOODIE,
        gender: Gender.UNISEX,
        size: [Size.M, Size.L, Size.XL],
        material: 'Katoen/Polyester',
        color: [Color.BLACK, Color.BLUE, Color.GRAY],
        price: 49.99,
        images: ['assets/merch/dens-hoodie-black.png', 'assets/merch/dens-hoodie-orange.png', "assets/merch/dens-hoodie-grey.png", "assets/merch/dens-hoodie-dark-green.png"],
        personalizationAllowed: true,
        personalizationOptions: {
          maxTextLength: 20,
          availableFonts: ['Arial', 'Courier New'],
          textColors: ['White', 'Black', 'Red'],
          textLocations: ['Borst', 'Rug'],
          extraCost: 5,
        }
      },
      {
        id: 2,
        name: 'Classic Hoodie',
        description: 'Comfortabele hoodie in zwart',
        category: ClothingCategory.HOODIE,
        gender: Gender.UNISEX,
        size: [Size.M, Size.L, Size.XL],
        material: 'Katoen/Polyester',
        color: [Color.BLACK, Color.BLUE, Color.GRAY],
        price: 49.99,
        images: ['assets/merch/dens-hoodie-black.png', 'assets/merch/dens-hoodie-orange.png', "assets/merch/dens-hoodie-grey.png", "assets/merch/dens-hoodie-dark-green.png"],
        personalizationAllowed: true,
        personalizationOptions: {
          maxTextLength: 20,
          availableFonts: ['Arial', 'Courier New'],
          textColors: ['White', 'Black', 'Red'],
          textLocations: ['Borst', 'Rug'],
          extraCost: 5,
        }
      },
      {
        id: 3,
        name: 'Classic Hoodie',
        description: 'Comfortabele hoodie in zwart',
        category: ClothingCategory.HOODIE,
        gender: Gender.UNISEX,
        size: [Size.M, Size.L, Size.XL],
        material: 'Katoen/Polyester',
        color: [Color.BLACK, Color.BLUE, Color.GRAY],
        price: 49.99,
        images: ['assets/merch/dens-hoodie-black.png', 'assets/merch/dens-hoodie-orange.png', "assets/merch/dens-hoodie-grey.png", "assets/merch/dens-hoodie-dark-green.png"],
        personalizationAllowed: true,
        personalizationOptions: {
          maxTextLength: 20,
          availableFonts: ['Arial', 'Courier New'],
          textColors: ['White', 'Black', 'Red'],
          textLocations: ['Borst', 'Rug'],
          extraCost: 5,
        }
      }
    ];
  }
}
