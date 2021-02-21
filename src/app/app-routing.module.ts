import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: 'pelicula/:idPelicula', component: PeliculaComponent},
{path: 'pelicula/busqueda/:idPelicula', component: PeliculaComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
