import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 private apikey = '37db1ca13ffb30d35740f27565f112a3';
 private urlMovieDb = 'https://api.themoviedb.org/3';
 peliculas: any [] = [];
  constructor(private http: HttpClient) {

   }

 getPopulares(): Observable<any>{
   // const url = 'https://api.themoviedb.org/3/movie/550?api_key=37db1ca13ffb30d35740f27565f112a3';
    const url = `${ this.urlMovieDb}/movie/popular?&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
 }

 getKidsMovies(): Observable<any>{
   // no funciona
   // /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.des
   // peliculas similares
   // https://api.themoviedb.org/3/movie/808/similar?api_key=37db1ca13ffb30d35740f27565f112a3&language=en-US&page=1
   const url = `${ this.urlMovieDb}/movie/808/similar?&api_key=${this.apikey}&language=es`;
   return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
  }
  getCartelera(): Observable<any>{
    // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-20
    // &primary_release_date.lte=2020-02-20&api_key=37db1ca13ffb30d35740f27565f112a3
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 5);
    const desdeStr = `${desde.getFullYear()}-0${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${desde.getFullYear()}-0${desde.getMonth() + 1}-${desde.getDate()}`;
    const url = `${ this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) => data.results));
  }

  getMovie(idPelicula: number): Observable<any>{
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
     const url = `${ this.urlMovieDb}/movie/${idPelicula}?api_key=${this.apikey}&language=es`;
     return this.http.get(url);
  }

  buscarPeliculas(termino: string): Observable<any>{
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
     const url = `${ this.urlMovieDb}/search/movie?api_key=${this.apikey}&query=${termino}&language=es`;
     return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe( map( (data: any) =>
     {
      this.peliculas = data.results;
      return data.results;
     }));
  }

}

