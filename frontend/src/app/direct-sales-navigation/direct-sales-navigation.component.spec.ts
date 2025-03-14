import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSalesNavigationComponent } from './direct-sales-navigation.component';

describe('DirectSalesNavigationComponent', () => {
  let component: DirectSalesNavigationComponent;
  let fixture: ComponentFixture<DirectSalesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectSalesNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSalesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
