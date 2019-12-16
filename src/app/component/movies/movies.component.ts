import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { MoviesInfo } from '../../dtos/movies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieName: string;
  movieList: MoviesInfo[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  search() {
    this.movieService.searchMovies(this.movieName).subscribe(
      response => this.movieList = response.Search
    );
  }

}
