import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { ShowRoutingModule } from './show-routing.module';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowComponent } from './components/show/show.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowService } from './services/show.service';



@NgModule({
  declarations: [
    ShowsComponent,
    ShowComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    ShowRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ShowService],
})
export class ShowModule { }
