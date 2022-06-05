import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IShow} from '../../interfaces/show.interface';
import {ShowService} from '../../services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: IShow[];
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private showService : ShowService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
        this.showService.getAll(this.page).subscribe(({ results }) => this.shows = results);
      }
    )
  }

  pageChange(event: number) {
    this.page = event;
    this.ngOnInit();
  }

}
