import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonatesComponent } from './neonates.component';

describe('NeonatesComponent', () => {
  let component: NeonatesComponent;
  let fixture: ComponentFixture<NeonatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
