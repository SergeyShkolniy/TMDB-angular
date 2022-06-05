import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {IMovieDetails} from '../../../movie/interfaces/movie-details.interface';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../movie/services/movie.service';



@Component({
  selector: 'app-search-movie-details',
  templateUrl: './search-movies-details.component.html',
  styleUrls: ['./search-movies-details.component.css']
})
export class SearchMoviesDetailsComponent implements OnInit {

  searchMovieDetails : IMovieDetails
  casts: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location : Location
  ) { this.location = location }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.movieService.getId(id).subscribe(value => this.searchMovieDetails = value)
      this.movieService.getCasts(id).subscribe(({cast}) => this.casts = cast )
    })
  }

  back() {
    this.location.back()
  }
}
