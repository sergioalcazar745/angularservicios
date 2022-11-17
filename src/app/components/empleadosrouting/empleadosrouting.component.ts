import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosrouting',
  templateUrl: './empleadosrouting.component.html',
  styleUrls: ['./empleadosrouting.component.css']
})
export class EmpleadosroutingComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response =>  {
      this.empleados = response;
    });
  }

}
