import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSalesBrandAmbassadorsComponent } from './direct-sales-brand-ambassadors.component';

describe('DirectSalesBrandAmbassadorsComponent', () => {
  let component: DirectSalesBrandAmbassadorsComponent;
  let fixture: ComponentFixture<DirectSalesBrandAmbassadorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectSalesBrandAmbassadorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSalesBrandAmbassadorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
