import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable()
export class PersonasService{

    constructor(private _http: HttpClient) {}

    getPersonas(): Promise<any>{
        var request = environment.url + "api/personas";
        let promise = new Promise((resolve) => {
            this._http.get(request).subscribe(response => {
                resolve(response)
            })
        });
        return promise;
    }
}