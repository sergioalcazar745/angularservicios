import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicinyeccionComponent } from "./components/comicinyeccion/comicinyeccion.component";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";

const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },

    {
        path: "libreria", component: LibreriaComponent
    },

    {
        path: "comicsinyeccion", component: ComicinyeccionComponent
    },

    {
        path: "personas", component: PersonasapiComponent
    },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)