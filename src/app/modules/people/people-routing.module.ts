import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeoplesComponent} from './components/peoples/peoples.component';
import {PeopleDetailsComponent} from './components/people-details/people-details.component';

const routes: Routes = [
  {path: '', component: PeoplesComponent},
  {path: ':id', component: PeopleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
