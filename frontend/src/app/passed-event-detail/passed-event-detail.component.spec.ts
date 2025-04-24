import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedEventDetailComponent } from './passed-event-detail.component';

describe('PassedEventDetailComponent', () => {
  let component: PassedEventDetailComponent;
  let fixture: ComponentFixture<PassedEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassedEventDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassedEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
