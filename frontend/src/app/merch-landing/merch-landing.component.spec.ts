import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchLandingComponent } from './merch-landing.component';

describe('MerchLandingComponent', () => {
  let component: MerchLandingComponent;
  let fixture: ComponentFixture<MerchLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
