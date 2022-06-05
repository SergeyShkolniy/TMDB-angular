import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from '../../../movie/interfaces/movie.interface';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  @Input()
  movie: IMovie

  constructor() { }

  ngOnInit(): void {
  }

}
