import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSalesFooterComponent } from './direct-sales-footer.component';

describe('DirectSalesFooterComponent', () => {
  let component: DirectSalesFooterComponent;
  let fixture: ComponentFixture<DirectSalesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectSalesFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSalesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
