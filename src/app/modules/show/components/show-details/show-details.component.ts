import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {IShowDetails} from '../../interfaces/show-details.interface';
import {ShowService} from '../../services/show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  showDetails : IShowDetails
  casts: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private showService: ShowService,
              private location : Location) { this.location = location }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.showService.getId(id).subscribe(value => this.showDetails = value)
      this.showService.getCasts(id).subscribe(({cast}) => this.casts = cast )
    })
  }

  back() {
    this.location.back()
  }

}
