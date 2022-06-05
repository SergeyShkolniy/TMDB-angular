import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IStorageInterface} from './storage.interface';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

   searchValue = new BehaviorSubject<IStorageInterface>({title: ''})


  constructor() {

  }
}
