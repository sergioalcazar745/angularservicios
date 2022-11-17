import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios!: Array<string>;
  public listaEmpleados!: Array<Empleado>;
  public loading!: boolean;

  @ViewChild("selectoficio") cajaOficios!: ElementRef;

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficio().subscribe(response => {
      this.oficios = response
    })
  }

  getEmpleadosByOficio(){
    this.loading = true;
    this._service.getEmpleadosByOficio(this.cajaOficios.nativeElement.value).subscribe(response => {
      this.listaEmpleados = response;
      this.loading = false;
    })
  }

}
