import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLegislacionComponent } from './pagina-legislacion.component';

describe('PaginaLegislacionComponent', () => {
  let component: PaginaLegislacionComponent;
  let fixture: ComponentFixture<PaginaLegislacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaLegislacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLegislacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
