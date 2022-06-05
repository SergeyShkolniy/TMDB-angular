import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import {PeopleService} from './services/people.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    PeoplesComponent,
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PeopleService]
})
export class PeopleModule { }
