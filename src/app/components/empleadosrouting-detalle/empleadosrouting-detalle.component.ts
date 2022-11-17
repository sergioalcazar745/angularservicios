import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosrouting-detalle',
  templateUrl: './empleadosrouting-detalle.component.html',
  styleUrls: ['./empleadosrouting-detalle.component.css']
})
export class EmpleadosroutingDetalleComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _activateRoute: ActivatedRoute, private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros:Params) =>{
      if(parametros['id'] != undefined){
        this.getEmpleado(parametros['id']);
      }
    })
  }

  getEmpleado(id: any){
    this._service.getEmpleadoById(id).subscribe(response =>{
      this.empleado = response;
    })
  }

}
