import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchClothingItemComponent } from './merch-clothing-item.component';

describe('MerchClothingItemComponent', () => {
  let component: MerchClothingItemComponent;
  let fixture: ComponentFixture<MerchClothingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchClothingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchClothingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
