import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContribucionesComponent } from './pagina-contribuciones.component';

describe('PaginaContribucionesComponent', () => {
  let component: PaginaContribucionesComponent;
  let fixture: ComponentFixture<PaginaContribucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaContribucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaContribucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
