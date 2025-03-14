import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSalesMeetTheTeamComponent } from './direct-sales-meet-the-team.component';

describe('DirectSalesMeetTheTeamComponent', () => {
  let component: DirectSalesMeetTheTeamComponent;
  let fixture: ComponentFixture<DirectSalesMeetTheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectSalesMeetTheTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSalesMeetTheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
