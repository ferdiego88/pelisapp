import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ShowimagePipe } from './pipes/showimage.pipe';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculascarteleraComponent } from './components/tipopelicula/peliculascartelera/peliculascartelera.component';
import { PeliculaspopularesComponent } from './components/tipopelicula/peliculaspopulares/peliculaspopulares.component';
import { PeliculaskidsComponent } from './components/tipopelicula/peliculaskids/peliculaskids.component';
import { PeliculatarjetaComponent } from './components/shared/tarjetas/peliculatarjeta/peliculatarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    ShowimagePipe,
    PeliculasComponent,
    PeliculascarteleraComponent,
    PeliculaspopularesComponent,
    PeliculaskidsComponent,
    PeliculatarjetaComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
