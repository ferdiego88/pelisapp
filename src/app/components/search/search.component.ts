import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService,
              private router: Router) { }


  buscar(termino: string): void{
    // console.log(termino);
    this.peliculasService.getMovies(termino).subscribe(data => {
        this.peliculas = data;
    });
  }
  verPelicula(idPelicula: number): void{
    this.router.navigate(['pelicula/busqueda', idPelicula]);
  }
}
