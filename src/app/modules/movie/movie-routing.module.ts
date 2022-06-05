import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {GenreMoviesComponent} from './components/genre-movies/genre-movies.component';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: ':id', component: MovieDetailsComponent},
  { path: 'genres/:id', component: GenreMoviesComponent },
  { path: 'genres/:id/:id', component: MovieDetailsComponent },
  { path: 'search/:id/id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
