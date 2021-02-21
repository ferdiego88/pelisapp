import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  fechaInicio: Date;
  fechaFin: Date;
  fechaInicioCartelera: string;
  fechaFinCartelera: string;
 private apikey = '37db1ca13ffb30d35740f27565f112a3';
 private urlMovieDb = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {
    this.fechaInicio = new Date();
    this.fechaFin = new Date();
    this.fechaInicioCartelera = '';
    this.fechaFinCartelera = '';
   }

 getPopulares(): Observable<any>{
   // const url = 'https://api.themoviedb.org/3/movie/550?api_key=37db1ca13ffb30d35740f27565f112a3';
    const url = `${ this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
 }

 getKidsMovies(): Observable<any>{
   const url = `${ this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;
   return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
  }
  getCartelera(): Observable<any>{
    // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-20
    // &primary_release_date.lte=2020-02-20&api_key=37db1ca13ffb30d35740f27565f112a3
    this.fechaInicioCartelera = `${this.fechaInicio.getFullYear()}-0${this.fechaInicio.getMonth()}-${this.fechaInicio.getDate()}` ;
    this.fechaFinCartelera = `${this.fechaInicio.getFullYear()}-0${this.fechaInicio.getMonth() + 1}-${this.fechaInicio.getDate()}` ;
    const url = `${ this.urlMovieDb}/discover/movie?primary_release_date.gte=${this.fechaInicioCartelera}&primary_release_date.lte=${this.fechaFinCartelera}&api_key=${this.apikey}&language=es`;
    // const url = 'https://api.themoviedb.org/3/movie/550?api_key=37db1ca13ffb30d35740f27565f112a3';
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
  }

  getMovie(idPelicula: number): Observable<any>{
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
     const url = `${ this.urlMovieDb}/movie/${idPelicula}?api_key=${this.apikey}&language=es`;
     return this.http.get(url);
  }

  getMovies(termino: string): Observable<any>{
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
     const url = `${ this.urlMovieDb}/search/movie?api_key=${this.apikey}&query=${termino}&language=es`;
     return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
  }

}

