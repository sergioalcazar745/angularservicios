import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasapiComponent } from './personasapi.component';

describe('PersonasapiComponent', () => {
  let component: PersonasapiComponent;
  let fixture: ComponentFixture<PersonasapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
