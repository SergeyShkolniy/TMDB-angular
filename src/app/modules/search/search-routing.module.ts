import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchMoviesComponent} from './components/search-movies/search-movies.component';
import {SearchMoviesDetailsComponent} from './components/search-movie-details/search-movies-details.component';

const routes: Routes = [
  {path: '', component: SearchMoviesComponent},
  {path: ':id', component: SearchMoviesDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
