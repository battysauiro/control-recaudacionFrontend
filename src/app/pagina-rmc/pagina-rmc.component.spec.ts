import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRMCComponent } from './pagina-rmc.component';

describe('PaginaRMCComponent', () => {
  let component: PaginaRMCComponent;
  let fixture: ComponentFixture<PaginaRMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
