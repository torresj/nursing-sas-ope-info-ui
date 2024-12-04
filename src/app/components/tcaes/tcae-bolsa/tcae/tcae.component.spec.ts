import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcaeComponent } from './tcae.component';

describe('TcaeComponent', () => {
  let component: TcaeComponent;
  let fixture: ComponentFixture<TcaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
