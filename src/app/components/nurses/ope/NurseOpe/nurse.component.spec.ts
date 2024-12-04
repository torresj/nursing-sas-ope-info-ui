import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseComponent } from './nurse.component';

describe('MemberComponent', () => {
  let component: NurseComponent;
  let fixture: ComponentFixture<NurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
