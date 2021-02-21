import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService) { }


  buscar(termino: string): void{
    // console.log(termino);
    this.peliculasService.getMovies(termino).subscribe(data => {
        this.peliculas = data;
    });
  }
}
