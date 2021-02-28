import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-tarjeta',
  templateUrl: './busqueda-tarjeta.component.html',
})
export class BusquedaTarjetaComponent implements OnInit {
  @Input() pelicula: any = [];
  @Input() termino = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verPelicula(idPelicula: number): void{
    this.router.navigate(['pelicula', idPelicula, 'buscar', this.termino]);
  }
}
