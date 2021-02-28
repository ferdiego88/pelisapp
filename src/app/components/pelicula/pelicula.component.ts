import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{
  pelicula: any = [];
  regresarA = '';
  busqueda = '';
  constructor(public ps: PeliculasService,
              public activatedRouter: ActivatedRoute)
{
this.activatedRouter.params.subscribe(parametros => {
  if (parametros.busqueda) {
    this.busqueda = parametros.busqueda;
  }
  this.regresarA = parametros.pag;
  console.log(this.regresarA);
  this.ps.getMovie(parametros.id).subscribe(pelicula => this.pelicula = pelicula);
});
}
}
