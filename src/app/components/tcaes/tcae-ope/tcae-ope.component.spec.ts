import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcaeOpeComponent } from './tcae-ope.component';

describe('TcaeOpeComponent', () => {
  let component: TcaeOpeComponent;
  let fixture: ComponentFixture<TcaeOpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcaeOpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcaeOpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
