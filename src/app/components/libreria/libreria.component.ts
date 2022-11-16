import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>
  public comicSeleccionado!: Comic;
  public comicFavorito!: Comic;
  public indiceComic!: number;

  @ViewChild("cajatitulo") titulo!: ElementRef;
  @ViewChild("cajaimagen") imagen!: ElementRef;
  @ViewChild("cajadescripcion") descripcion!: ElementRef;

  constructor(private _servicio: ComicsService) {
    
  }

  ngOnInit(): void {
    this.comics = this._servicio.getComics()
  }

  favorito(event:any){
    this.indiceComic = event
    this.comicFavorito = this.comics[event];
  }

  modificar(event:any){
    var comicUpdate = {
      titulo: this.titulo.nativeElement.value,
      imagen: this.imagen.nativeElement.value,
      descripcion: this.descripcion.nativeElement.value
    }
    this.comics[event] = comicUpdate;  
    if(event == this.indiceComic){
      this.comicFavorito = this.comics[event];
    }
  }

  eliminar(event:any){
    this.comics.splice(event, 1)
  }

  insertar(){
    this.comics.push(new Comic(this.titulo.nativeElement.value, this.imagen.nativeElement.value, this.descripcion.nativeElement.value))
  }
}
