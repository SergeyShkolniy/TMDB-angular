import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: 'movies', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule) },
      { path: 'shows', loadChildren: () => import('./modules/show/show.module').then(value => value.ShowModule) },
      { path: 'peoples', loadChildren: () => import('./modules/people/people.module').then(value => value.PeopleModule) },
      { path: 'movies', loadChildren: () => import('./modules/genre/genre.module').then(value => value.GenreModule) },
      { path: 'search', loadChildren: () => import('./modules/search/search.module').then(value => value.SearchModule) },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
