import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MovieService} from '../../../modules/movie/services/movie.service';
import {StorageService} from '../../../services/storage.service';
import {IStorageInterface} from '../../../services/storage.interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  storedTheme = localStorage.getItem('theme-color');

  @Output()
  themeEmitter = new EventEmitter<string | null>()

  form: FormGroup
  searchValue: IStorageInterface

  constructor(private movieService : MovieService, private storageService : StorageService) {
    this.searchForm()
  }

  ngOnInit(): void {


  }

  setTheme() {
    if (this.storedTheme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-light')
      this.storedTheme = localStorage.getItem('theme-color')
      this.themeEmitter.emit(this.storedTheme)
    } else {
      localStorage.setItem('theme-color', 'theme-dark')
      this.storedTheme = localStorage.getItem('theme-color')
      this.themeEmitter.emit(this.storedTheme)
    }
  }

  searchForm(): void{
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.minLength(2), Validators.maxLength(50)])
    })

  }

  search() {
      this.searchValue = this.form.getRawValue().search
      this.storageService.searchValue.next(this.searchValue)
      this.form.reset()
  }
}
