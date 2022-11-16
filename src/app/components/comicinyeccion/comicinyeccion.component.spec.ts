import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicinyeccionComponent } from './comicinyeccion.component';

describe('ComicinyeccionComponent', () => {
  let component: ComicinyeccionComponent;
  let fixture: ComponentFixture<ComicinyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicinyeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicinyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
