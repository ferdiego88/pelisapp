import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-peliculaskids',
  templateUrl: './peliculaskids.component.html',
  styleUrls: ['./peliculaskids.component.css']
})
export class PeliculaskidsComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService,
              private router: Router) {
    this.peliculasService.getKidsMovies().subscribe(data => this.peliculas = data);
   }

   verPelicula(idPelicula: number): void{
    this.router.navigate(['pelicula', idPelicula, 'home']);
  }
}
