import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';
import {StorageService} from '../../../../services/storage.service';
import {IStorageInterface} from '../../../../services/storage.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  page: number = 1;
  searchValue: IStorageInterface

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private storageService : StorageService
  ) {
    storageService.searchValue.subscribe(value => {

        this.searchValue = value

    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
        this.movieService.getAll(this.page).subscribe(({ results }) => this.movies = results);
        this.movieService.getByGenreId(id, this.page).subscribe(({ results }) => this.movies = results)


      }
    )
  }

  pageChange(event: number) {
    this.page = event;
    this.ngOnInit();
  }

}
