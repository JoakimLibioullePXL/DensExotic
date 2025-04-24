import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchContactComponent } from './merch-contact.component';

describe('MerchContactComponent', () => {
  let component: MerchContactComponent;
  let fixture: ComponentFixture<MerchContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
