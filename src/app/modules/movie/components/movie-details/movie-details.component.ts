import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {IMovieDetails} from '../../interfaces/movie-details.interface';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovieDetails;
  casts: any[];

  constructor( private activatedRoute: ActivatedRoute,
               private movieService: MovieService,
               private location : Location ) {
    this.location = location
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.movieService.getId(id).subscribe(value => this.movieDetails = value)
      this.movieService.getCasts(id).subscribe(({cast}) => this.casts = cast )
        })
  }

  back() {
    this.location.back()
  }
}
