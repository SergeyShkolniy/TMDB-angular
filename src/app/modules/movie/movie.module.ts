import { NgModule } from '@angular/core';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { GenreMoviesComponent } from './components/genre-movies/genre-movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenreMoviesComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [MovieService, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class MovieModule { }
