import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API, apiKey, urls} from '../../../constants/urls';
import {IGenre} from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient : HttpClient) { }

  getGenres(): Observable<IGenre> {
    return this.httpClient.get<IGenre>(`${API}${urls.genres}${apiKey}`)
  }
}
