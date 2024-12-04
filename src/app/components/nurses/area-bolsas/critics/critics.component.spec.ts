import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticsComponent } from './critics.component';

describe('CriticsComponent', () => {
  let component: CriticsComponent;
  let fixture: ComponentFixture<CriticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
