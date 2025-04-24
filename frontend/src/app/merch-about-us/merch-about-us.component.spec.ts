import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAboutUsComponent } from './merch-about-us.component';

describe('MerchAboutUsComponent', () => {
  let component: MerchAboutUsComponent;
  let fixture: ComponentFixture<MerchAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
