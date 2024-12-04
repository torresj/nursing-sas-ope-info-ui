import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcaeBolsaComponent } from './tcae-bolsa.component';

describe('TcaeBolsaComponent', () => {
  let component: TcaeBolsaComponent;
  let fixture: ComponentFixture<TcaeBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcaeBolsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcaeBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
