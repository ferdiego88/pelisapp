import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  peliculas: any[] = [];
  constructor(private peliculaService: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.params.subscribe(param => {
      if (param.termino) {
        this.peliculaService.buscarPeliculas(param.termino).subscribe(data => {
          this.peliculas = data;
      });
      }
    });
  }

buscarPelicula(termino: string): void{
  if (termino.length === 0) {
    return;
  }
  this.router.navigate(['search', termino]);
}

}
