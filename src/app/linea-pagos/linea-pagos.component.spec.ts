import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaPagosComponent } from './linea-pagos.component';

describe('LineaPagosComponent', () => {
  let component: LineaPagosComponent;
  let fixture: ComponentFixture<LineaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
