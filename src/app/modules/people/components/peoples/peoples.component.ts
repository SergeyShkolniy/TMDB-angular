import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IPeople} from '../../interfaces/people.interface';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples: IPeople[];
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private peopleService : PeopleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
        this.peopleService.getAll(this.page).subscribe(({ results }) => this.peoples = results);
        // this.movieService.getByGenreId(id, this.page).subscribe(value => this.movies = value.results)
      }
    )
  }

  pageChange(event: number) {
    this.page = event;
    this.ngOnInit();
  }

}
