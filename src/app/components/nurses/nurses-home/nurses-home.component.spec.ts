import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesHomeComponent } from './nurses-home.component';

describe('NursesHomeComponent', () => {
  let component: NursesHomeComponent;
  let fixture: ComponentFixture<NursesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
