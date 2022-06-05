import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {IPeopleDetails} from '../../interfaces/people-details.interface';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../services/people.service';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  peopleDetails : IPeopleDetails

  constructor(private activatedRoute: ActivatedRoute,
              private peopleService : PeopleService,
              private location : Location
  ) { this.location = location }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.peopleService.getId(id).subscribe(value => this.peopleDetails = value)
    })
  }

  back() {
    this.location.back()
  }

}
