import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {
  public loading: boolean;
  public listaEmpleados!: Array<Empleado>;

  @ViewChild("cajasalario") cajaSalario!: ElementRef;

  constructor(private _service: EmpleadosService) {
    this.loading = true
  }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.listaEmpleados = response;
      this.loading = false
    })
  }

  mostrarEmpleadosSalario(): void{
    this.loading = true;
    var salario = this.cajaSalario.nativeElement.value;
    this._service.getEmpleadosBySalario(salario).subscribe(response => {
      this.listaEmpleados = response
      this.loading = false;
    })
  }

}
