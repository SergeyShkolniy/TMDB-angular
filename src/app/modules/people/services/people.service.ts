import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API, apiKey, urls} from '../../../constants/urls';
import {IResponsePeople} from '../interfaces/response-people.interface';
import {IPeopleDetails} from '../interfaces/people-details.interface';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<IResponsePeople> {
    return this.httpClient.get<IResponsePeople>(`${API}${urls.peoples}`, { params: { page } })
  }

  getId(id: number): Observable<IPeopleDetails> {
    return this.httpClient.get<IPeopleDetails>(`${API}${urls.people}${id}${apiKey}`)
  }
}
