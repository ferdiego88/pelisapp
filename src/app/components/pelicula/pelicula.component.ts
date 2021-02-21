import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{
  pelicula: any = [];
  constructor(private peliculaService: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private router: Router )
{
  this.activatedRoute.params.subscribe(param => {
     this.peliculaService.getMovie(param.idPelicula).subscribe(data => {
      this.pelicula = data; console.log(this.pelicula);
     } );
  });
}

goHome(){
  this.router.navigate(['/home']);
}
}
