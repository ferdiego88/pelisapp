import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 private apikey = '37db1ca13ffb30d35740f27565f112a3';
 private urlMovieDb = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

 getPopulares(){
    const url = `${ this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    // const url = 'https://api.themoviedb.org/3/movie/550?api_key=37db1ca13ffb30d35740f27565f112a3';
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
 }
}

