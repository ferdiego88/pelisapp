import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  constructor(peliculasService: PeliculasService) {
    peliculasService.getPopulares()
      .subscribe(data => this.peliculas = data);
   }

  ngOnInit(): void {
  }

}
