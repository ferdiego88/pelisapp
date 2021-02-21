import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-peliculaskids',
  templateUrl: './peliculaskids.component.html',
  styleUrls: ['./peliculaskids.component.css']
})
export class PeliculaskidsComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.getKidsMovies().subscribe(data => this.peliculas = data);
   }
}
