import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comicinyeccion',
  templateUrl: './comicinyeccion.component.html',
  styleUrls: ['./comicinyeccion.component.css'],
  providers: [ComicsService]
})
export class ComicinyeccionComponent implements OnInit {
  public comics!: Array<Comic>

  constructor(private _servicio: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._servicio.getComics()
  }

}
