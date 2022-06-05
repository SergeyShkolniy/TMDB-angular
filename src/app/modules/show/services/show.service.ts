import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API, apiKey, urls} from '../../../constants/urls';
import {ICast} from '../../movie/interfaces/cast.interface';
import {IResponseShow} from '../interfaces/response-show.interface';
import {IShowDetails} from '../interfaces/show-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<IResponseShow> {
    return this.httpClient.get<IResponseShow>(`${API}${urls.tvShows}`, { params: { page } })
  }

  getId(id: number): Observable<IShowDetails> {
    return this.httpClient.get<IShowDetails>(`${API}${urls.tvShow}${id}${apiKey}`)
  }

  getCasts(id: number): Observable<ICast> {
    return this.httpClient.get<ICast>(`${API}${urls.tvShow}${id}/credits${apiKey}`)
  }
}
