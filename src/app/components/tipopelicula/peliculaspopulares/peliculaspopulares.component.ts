import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-peliculaspopulares',
  templateUrl: './peliculaspopulares.component.html',
  styleUrls: ['./peliculaspopulares.component.css']
})
export class PeliculaspopularesComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService,
              private router: Router) {
    this.peliculasService.getPopulares().subscribe(data => this.peliculas = data);
   }

   verPelicula(idPelicula: number): void{
    this.router.navigate(['pelicula', idPelicula]);
  }
}
