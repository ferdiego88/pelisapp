import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../../providers/peliculas.service';

@Component({
  selector: 'app-peliculatarjeta',
  templateUrl: './peliculatarjeta.component.html',
  styleUrls: ['./peliculatarjeta.component.css']
})
export class PeliculatarjetaComponent  {
  peliculas: any [] = []
  constructor(peliculasService: PeliculasService ) {
    peliculasService.getPopulares().subscribe(data => this.peliculas = data);
   }



}
