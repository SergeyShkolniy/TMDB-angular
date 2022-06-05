import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  theme = localStorage.getItem('theme-color');

  constructor() { }

  ngOnInit(): void {
  }

  catchTheme(storedTheme: string | null): void {
    this.theme = storedTheme
  }

}
