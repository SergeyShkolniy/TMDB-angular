import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {API, urls} from '../../../constants/urls';
import {IStorageInterface} from '../../../services/storage.interface';
import {IResponseMovie} from '../../movie/interfaces/response-movie.interface';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  search(title: IStorageInterface, page: number): Observable<IResponseMovie> {
    return this.httpClient.get<IResponseMovie>(`${API}${urls.search}&page=${page}&query=${title}`)
  }
}
