import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IMovie} from '../../../movie/interfaces/movie.interface';
import {StorageService} from '../../../../services/storage.service';
import {SearchService} from '../../services/search.service';
import {IStorageInterface} from '../../../../services/storage.interface';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies: IMovie[];
  page: number = 1;
  searchValue: IStorageInterface

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private storageService : StorageService
  ) {
  }

  ngOnInit(): void {
    this.storageService.searchValue.subscribe(value => this.searchValue = value )
    this.searchService.search(this.searchValue, this.page).subscribe(({ results }) => this.movies = results)
  }

}
