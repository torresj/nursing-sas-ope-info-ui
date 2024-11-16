import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalSpecificComponent } from './mental-specific.component';

describe('MentalSpecificComponent', () => {
  let component: MentalSpecificComponent;
  let fixture: ComponentFixture<MentalSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalSpecificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
