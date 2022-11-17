import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicinyeccionComponent } from "./components/comicinyeccion/comicinyeccion.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { EmpleadosroutingDetalleComponent } from "./components/empleadosrouting-detalle/empleadosrouting-detalle.component";
import { EmpleadosroutingComponent } from "./components/empleadosrouting/empleadosrouting.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { PlantillaComponent } from "./components/plantilla/plantilla.component";

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

    {
        path: "empleados", component: EmpleadossalarioComponent
    },

    {
        path: "oficios", component: EmpleadosoficioComponent
    },

    {
        path: "plantillas", component: PlantillaComponent
    },

    {
        path: "empleados-routing", component: EmpleadosroutingComponent
    },

    {
        path: "empleados-routing/:id", component: EmpleadosroutingDetalleComponent
    },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)