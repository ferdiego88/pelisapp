import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';


@Component({
  selector: 'app-peliculascartelera',
  templateUrl: './peliculascartelera.component.html',
  styleUrls: ['./peliculascartelera.component.css']
})
export class PeliculascarteleraComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService,
              private router: Router) {
    this.peliculasService.getCartelera().subscribe(data =>
      {this.peliculas = data;
       console.log(this.peliculas); });
  }

  verPelicula(idPelicula: number): void{
    this.router.navigate(['pelicula', idPelicula]);
  }

}
