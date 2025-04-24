import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchCategoryComponent } from './merch-category.component';

describe('MerchCategoryComponent', () => {
  let component: MerchCategoryComponent;
  let fixture: ComponentFixture<MerchCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
