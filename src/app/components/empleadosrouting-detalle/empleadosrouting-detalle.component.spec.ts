import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosroutingDetalleComponent } from './empleadosrouting-detalle.component';

describe('EmpleadosroutingDetalleComponent', () => {
  let component: EmpleadosroutingDetalleComponent;
  let fixture: ComponentFixture<EmpleadosroutingDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosroutingDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosroutingDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
