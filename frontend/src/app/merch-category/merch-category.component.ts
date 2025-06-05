import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ClothingService} from '../shared/services/clothing.service';
import {ClothingItem} from '../shared/models/clothing-item.model';
import {ClothingCategory} from '../shared/models/enums.model';
import {CurrencyPipe, NgForOf, TitleCasePipe} from '@angular/common';
import {MerchNavigationComponent} from '../merch-navigation/merch-navigation.component';

@Component({
  selector: 'app-merch-category',
  templateUrl: './merch-category.component.html',
  imports: [
    RouterLink,
    CurrencyPipe,
    TitleCasePipe,
    NgForOf,
    MerchNavigationComponent
  ],
  styleUrls: ['./merch-category.component.css']
})
export class MerchCategoryComponent implements OnInit {
  items: ClothingItem[] = [];
  categoryName: string = '';

  private categoryMap: { [key: string]: ClothingCategory } = {
    'hoodies': ClothingCategory.HOODIE,
    'extra': ClothingCategory.EXTRA,
    'accessory': ClothingCategory.ACCESSORY,
    't-shirts': ClothingCategory.TSHIRT,
    'polos': ClothingCategory.POLO,
    'jackets': ClothingCategory.JACKET
  };

  constructor(
    private route: ActivatedRoute,
    private clothingService: ClothingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category') || '';
      const categoryEnum = this.categoryMap[this.categoryName.toLowerCase()];
      if (categoryEnum !== undefined) {
        this.items = this.clothingService.getItemsByCategory(categoryEnum);
      } else {
        this.items = [];
      }
    });
  }
}
