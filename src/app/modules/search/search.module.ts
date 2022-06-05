import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import {SearchService} from './services/search.service';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { SearchMoviesDetailsComponent } from './components/search-movie-details/search-movies-details.component';



@NgModule({
  declarations: [
    SearchMoviesComponent,
    SearchMovieComponent,
    SearchMoviesDetailsComponent,

  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  providers: [SearchService]
})
export class SearchModule { }
