import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: 'pelicula/:idPelicula/home', component: PeliculaComponent},
{path: 'pelicula/:idPelicula/buscar/:termino', component: PeliculaComponent},
{path: 'pelicula/buscar/:termino', component: SearchComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
