import { Component} from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  cartelera: any;
  populares: any;
  kids: any;
  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().subscribe(data => this.cartelera = data);
    this.ps.getPopulares().subscribe(data => {this.populares = data; console.log(data); });
    this.ps.getKidsMovies().subscribe(data => {this.kids = data; console.log(data); });
  }



}
