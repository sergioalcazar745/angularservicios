import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  public plantillas!: Array<Plantilla>
  public funciones!: Array<string>
  public busqueda!: Array<string>
  public loading!: boolean;

  @ViewChild("selectfunciones") selectFunciones!: ElementRef;

  constructor(private _service: PlantillaService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response =>{
      this.funciones = response;
    })

    this._service.getPlantillas().subscribe(response =>{
      this.plantillas = response;
      this.loading = false
    })
  }

  getPlantillaByFuncion(){
    var seleccionados: Array<string> = [];
    for (let opt of this.selectFunciones.nativeElement.options) {
      if(opt.selected)
        seleccionados.push(opt.value)
    }

    this._service.getPlantillasByFunciones(seleccionados).subscribe(response => {
      this.plantillas = response;
      this.busqueda = seleccionados;
    })
  }

}
