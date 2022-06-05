import {Component, Input, OnInit} from '@angular/core';

import {IShow} from '../../interfaces/show.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input()
  show: IShow

  constructor() { }

  ngOnInit(): void {
  }

}
