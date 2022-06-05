import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowsComponent} from './components/shows/shows.component';
import {ShowDetailsComponent} from './components/show-details/show-details.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: ':id', component: ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
