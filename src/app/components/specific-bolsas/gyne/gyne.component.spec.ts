import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyneComponent } from './gyne.component';

describe('GyneComponent', () => {
  let component: GyneComponent;
  let fixture: ComponentFixture<GyneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GyneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GyneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
