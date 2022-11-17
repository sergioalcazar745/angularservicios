import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmpleadosService {

  constructor(private _http: HttpClient) {}

  getEmpleados(): Observable<any>{
    var request = environment.urlEmpleados + "api/empleados";
    console.log(request)
    return this._http.get(request)
  }

  getEmpleadosBySalario(salario: string): Observable<any>{
    var request = environment.urlEmpleados + "api/empleados/empleadossalario/" + salario;
    return this._http.get(request);
  }

  getOficio(): Observable<any>{
    var request = environment.urlEmpleados + "api/empleados/oficios"
    return this._http.get(request);
  }

  getEmpleadosByOficio(oficio: string): Observable<any>{
    var request = environment.urlEmpleados + "api/empleados/empleadosoficio/" + oficio;
    return this._http.get(request)
  }
}
