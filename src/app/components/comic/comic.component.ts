import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Input() indice!: number;

  @Output() modificarComic: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modificar(){
    this.modificarComic.emit(this.indice);
  }

  eliminar(){
    this.eliminarComic.emit(this.indice)
  }

  favorito(){
    this.seleccionarFavorito.emit(this.indice)
  }
}
