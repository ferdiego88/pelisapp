import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { PeliculatarjetaComponent } from './components/shared/tarjetas/peliculatarjeta/peliculatarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BusquedaTarjetaComponent } from './components/shared/tarjetas/busqueda-tarjeta/busqueda-tarjeta.component';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    PeliculatarjetaComponent,
    LoadingComponent,
    BusquedaTarjetaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
