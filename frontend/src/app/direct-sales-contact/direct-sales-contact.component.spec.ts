import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSalesContactComponent } from './direct-sales-contact.component';

describe('DirectSalesContactComponent', () => {
  let component: DirectSalesContactComponent;
  let fixture: ComponentFixture<DirectSalesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectSalesContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSalesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
