import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcaesHomeComponent } from './tcaes-home.component';

describe('TcaesHomeComponent', () => {
  let component: TcaesHomeComponent;
  let fixture: ComponentFixture<TcaesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcaesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcaesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
