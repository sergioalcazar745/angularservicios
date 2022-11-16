import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicinyeccionComponent } from './components/comicinyeccion/comicinyeccion.component';
import { ComicsService } from './services/comics.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasService } from './services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    HomeComponent,
    MenuComponent,
    ComicinyeccionComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
