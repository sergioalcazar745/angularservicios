import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicinyeccionComponent } from './components/comicinyeccion/comicinyeccion.component';
import { ComicsService } from './services/comics.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PlantillaService } from './services/plantilla.service';
import { EmpleadosroutingComponent } from './components/empleadosrouting/empleadosrouting.component';
import { EmpleadosroutingDetalleComponent } from './components/empleadosrouting-detalle/empleadosrouting-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    HomeComponent,
    MenuComponent,
    ComicinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    PlantillaComponent,
    EmpleadosroutingComponent,
    EmpleadosroutingDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule 
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService, EmpleadosService, PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
