import { Component} from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-peliculaspopulares',
  templateUrl: './peliculaspopulares.component.html',
  styleUrls: ['./peliculaspopulares.component.css']
})
export class PeliculaspopularesComponent {
  peliculas: any[] = [];
  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.getPopulares().subscribe(data => this.peliculas = data);
   }


}
