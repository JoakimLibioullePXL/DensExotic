import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingItem } from '../shared/models/clothing-item.model';
import {ClothingService} from '../shared/services/clothing.service';
import {MerchNavigationComponent} from '../merch-navigation/merch-navigation.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-merch-clothing-item',
  templateUrl: './merch-clothing-item.component.html',
  imports: [
    MerchNavigationComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./merch-clothing-item.component.css']
})
export class MerchClothingItemComponent implements OnInit {
  clothingItem!: any;
  selectedImageIndex: number = 0;
  showModal: boolean = false;

  constructor(private route: ActivatedRoute, private merchService: ClothingService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadClothingItem(id);
  }

  loadClothingItem(id: number): void {
    this.clothingItem = this.merchService.getItemById(id);
  }

  get selectedImage(): string {
    return this.clothingItem?.images?.[this.selectedImageIndex] || '';
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  handleSwipe(deltaX: number): void {
    const nextIndex = deltaX < 0 ? this.selectedImageIndex + 1 : this.selectedImageIndex - 1;

    if (nextIndex >= 0 && nextIndex < this.clothingItem.images.length) {
      this.selectedImageIndex = nextIndex;
    }
  }
}
