import {Component, Input, OnInit} from '@angular/core';

import {IPeople} from '../../interfaces/people.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input()
  people: IPeople

  constructor() { }

  ngOnInit(): void {
  }

}
