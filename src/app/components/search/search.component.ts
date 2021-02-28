import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  peliculas: any[] = [];
  buscar = '';
  constructor(public ps: PeliculasService,
              public activatedRouter: ActivatedRoute)
{
this.activatedRouter.params.subscribe(parametros => {
  if (parametros.termino) {
    this.buscar = parametros.termino;
    this.buscarPelicula();
  }
});
}


  buscarPelicula(): void{
    // console.log(termino);
    if (this.buscar.length === 0) {
      return;
    }
    this.ps.buscarPeliculas(this.buscar).subscribe(data => {
        this.peliculas = data;
    });
  }
}
