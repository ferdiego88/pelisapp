import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-peliculatarjeta',
  templateUrl: './peliculatarjeta.component.html',
  styleUrls: ['./peliculatarjeta.component.css']
})
export class PeliculatarjetaComponent  {
  @Input() pelicula: any = [];
  @Input() idPelicula: number | undefined;
  @Output() peliculaSeleccionada: EventEmitter<number>;
  constructor() {
    this.peliculaSeleccionada = new EventEmitter();
   }

   verPelicula(): void{
     this.peliculaSeleccionada.emit(this.idPelicula);
     // console.log(this.idPelicula);
   }


}
