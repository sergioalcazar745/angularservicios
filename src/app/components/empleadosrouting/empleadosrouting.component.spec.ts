import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosroutingComponent } from './empleadosrouting.component';

describe('EmpleadosroutingComponent', () => {
  let component: EmpleadosroutingComponent;
  let fixture: ComponentFixture<EmpleadosroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
