import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas!: Array<Persona>;
  public loading: boolean;

  constructor(private _servicio: PersonasService) {
    this.loading = true
  }

  ngOnInit(): void {
    this._servicio.getPersonas().then(response => {
      this.personas = response;
      this.loading = false;
    })
  }
}
