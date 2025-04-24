import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchNavigationComponent } from './merch-navigation.component';

describe('MerchNavigationComponent', () => {
  let component: MerchNavigationComponent;
  let fixture: ComponentFixture<MerchNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
