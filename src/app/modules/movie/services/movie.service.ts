import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IResponseMovie} from '../interfaces/response-movie.interface';
import {API, apiKey, urls} from '../../../constants/urls';
import {IMovieDetails} from '../interfaces/movie-details.interface';
import {ICast} from '../interfaces/cast.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<IResponseMovie> {
    return this.httpClient.get<IResponseMovie>(`${API}${urls.movies}`, { params: { page } })
  }

  getId(id: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${API}${urls.movie}${id}${apiKey}`)
  }

  getByGenreId(id: number, page: number): Observable<IResponseMovie> {
    return this.httpClient.get<IResponseMovie>(`${API}${urls.movies}`, { params: { with_genres: id, page } })
  }


  getCasts(id: number): Observable<ICast> {
    return this.httpClient.get<ICast>(`${API}${urls.movie}${id}/credits${apiKey}`)
  }


}
