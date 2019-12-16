import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../dtos/movies';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string;

  constructor(private http: HttpClient) { }

  searchMovies(movieName: string) {
    this.url = environment.urlBase + '?s=' + movieName + '&apikey=' + environment.apikey;
    return this.http.get<Movies>(this.url);
  }

  getMovieById(idMovie: string) {
    this.url = environment.urlBase + '?i=' + idMovie + '&apikey=' + environment.apikey;
  }
}
