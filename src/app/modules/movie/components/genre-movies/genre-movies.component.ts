import { Component, OnInit } from '@angular/core';

import {IMovie} from '../../interfaces/movie.interface';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit {

  genreMovies: IMovie[];

  constructor() { }

  ngOnInit(): void {
  }

}
