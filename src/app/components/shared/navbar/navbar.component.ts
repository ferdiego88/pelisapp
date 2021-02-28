import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  peliculas: any[] = [];
  constructor(private peliculaService: PeliculasService) { }

buscarPelicula(termino: string): void{
  this.peliculaService.getMovies(termino).subscribe(data => {
    this.peliculas = data;
  });
}

}
