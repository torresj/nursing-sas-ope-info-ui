import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeComponent } from './ope.component';

describe('OpeComponent', () => {
  let component: OpeComponent;
  let fixture: ComponentFixture<OpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
