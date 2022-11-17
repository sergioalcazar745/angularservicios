import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PlantillaService{
    constructor(private _http: HttpClient){}

    getFunciones(): Observable<any>{
        var request = environment.urlPlantilla + "api/plantilla/funciones";
        return this._http.get(request);
    }

    getPlantillas(): Observable<any>{
        var request = environment.urlPlantilla + "api/plantilla";
        return this._http.get(request);
    }

    getPlantillasByFunciones(lista: string[]): Observable<any>{
        //https://apiplantillacore.azurewebsites.net/api/Plantilla/PlantillaFunciones?funcion=ENFERMERA 
        var request = environment.urlPlantilla + "api/Plantilla/PlantillaFunciones?";
        for (let funcion of lista) {
            request += "funcion=" + funcion + "&"
        }
        return this._http.get(request);
    }
}