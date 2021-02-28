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
  @Input() termino = '';
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

goHome(): void{

this.activatedRoute.url.subscribe(urlActivated => urlActivated
  .find(valor => {
    if (valor.path === 'home') {
      this.router.navigate(['/home']);
    }else if ( valor.path === 'buscar'){
      this.activatedRoute.params.subscribe(param =>
        this.router.navigate(['pelicula/buscar/', param.termino]));
    }
  } ));
}
}
