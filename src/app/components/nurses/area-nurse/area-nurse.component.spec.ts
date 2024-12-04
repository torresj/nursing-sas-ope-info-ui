import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNurseComponent } from './area-nurse.component';

describe('AreaNurseComponent', () => {
  let component: AreaNurseComponent;
  let fixture: ComponentFixture<AreaNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
